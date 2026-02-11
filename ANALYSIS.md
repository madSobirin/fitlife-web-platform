# 📘 Analisis Kesalahan & Panduan Alur Project FitLife

> Dokumen ini dibuat sebagai bahan belajar untuk memahami alur project, fungsi setiap file, dan kesalahan yang pernah terjadi agar tidak terulang.

---

## 🗺️ Arsitektur & Alur Project

```
┌─────────────────────────────────────────────────────────┐
│                     BROWSER / CLIENT                     │
│   User mengakses website atau mobile app kirim request   │
└────────────────────────┬────────────────────────────────┘
                         │ HTTP Request (POST /api/auth/login)
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   NEXT.JS SERVER                         │
│                                                          │
│  src/app/api/auth/register/route.js  ← API Register     │
│  src/app/api/auth/login/route.js     ← API Login        │
│                         │                                │
│                         ▼                                │
│              src/lib/prisma.js       ← Prisma Client     │
│              (koneksi ke database)                        │
└────────────────────────┬────────────────────────────────┘
                         │ SQL Query via Prisma
                         ▼
┌─────────────────────────────────────────────────────────┐
│              POSTGRESQL DATABASE (Neon)                   │
│                                                          │
│  Table: Users (id, name, email, password, role, ...)     │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Fungsi Setiap File

### 1. `prisma/schema.prisma` — Definisi Struktur Database

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"      ← Tipe database yang dipakai
}

model Users {                   ← Nama tabel di database
  id        Int    @id @default(autoincrement())
  name      String
  email     String @unique
  password  String
  role      Role   @default(user)
  ...
}
```

**Kegunaan:**

- Mendefinisikan **bentuk tabel** di database (seperti blueprint)
- Prisma membaca file ini untuk men-generate kode TypeScript/JavaScript
- Ketika kamu jalankan `npx prisma generate`, Prisma baca file ini dan buat "client" yang bisa kamu pakai di kode

**⚠️ Penting di Prisma v7:**

- `url` **tidak lagi ditulis** di `schema.prisma`
- URL database diatur di `prisma.config.ts` (untuk CLI) dan di `prisma.js` (untuk runtime)

---

### 2. `prisma.config.ts` — Konfigurasi Prisma CLI

```typescript
export default defineConfig({
  schema: "prisma/schema.prisma", // lokasi schema
  migrations: {
    seed: "node prisma/seed.js", // perintah seed
    path: "prisma/migrations", // folder migration
  },
  datasource: {
    url: process.env["DATABASE_URL"], // URL database untuk CLI
  },
});
```

**Kegunaan:**

- Konfigurasi untuk **perintah CLI Prisma** (`prisma generate`, `prisma migrate`, `prisma db seed`)
- Memberitahu Prisma **di mana** schema file, migration folder, dan seed command
- **Bukan** untuk runtime (aplikasi Next.js) — hanya untuk CLI tools

---

### 3. `src/lib/prisma.js` — Koneksi Database di Aplikasi

```javascript
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  const adapter = new PrismaPg({ connectionString }); // ① Buat adapter PostgreSQL
  return new PrismaClient({ adapter }); // ② Buat PrismaClient pakai adapter
}

const prisma = globalForPrisma.prisma ?? createPrismaClient(); // ③ Singleton pattern
```

**Kegunaan:**

- File ini adalah **jembatan** antara kode aplikasi dan database
- Semua API route (`register`, `login`, dll) import dari sini
- Menggunakan **singleton pattern** (`globalForPrisma`) supaya tidak buat koneksi baru setiap kali ada request (hemat resource)

**⚠️ Penting di Prisma v7:**

- Prisma v7 pakai **driver adapter** (`PrismaPg`), bukan `datasourceUrl`
- Adapter `@prisma/adapter-pg` harus di-install terpisah: `pnpm add @prisma/adapter-pg`

---

### 4. `prisma/seed.js` — Isi Data Awal ke Database

```javascript
import prisma from "../src/lib/prisma.js";

async function main() {
  const admin = await prisma.users.upsert({
    // ← pakai prisma.users (bukan prisma.user!)
    where: { email: "admin@fitlife.id" },
    update: {},
    create: {
      email: "admin@fitlife.id",
      name: "Super Admin",
      password: hashedPassword,
      role: "admin",
    },
  });
}
```

**Kegunaan:**

- Mengisi database dengan **data awal** (admin, user default)
- Dijalankan dengan perintah: `npx prisma db seed`
- Pakai `upsert` = jika data sudah ada → update, jika belum → create (aman dijalankan berulang)

---

### 5. `src/app/api/auth/register/route.js` — API Registrasi User

**Alur:**

```
Client POST { name, email, password }
        │
        ▼
  ① Validasi: apakah name, email, password ada?
        │
        ▼
  ② Cek: apakah email sudah terdaftar?
     prisma.users.findUnique({ where: { email } })
        │
        ▼
  ③ Hash password dengan bcrypt (supaya aman)
     bcrypt.hash(password, 10)
        │
        ▼
  ④ Simpan ke database
     prisma.users.create({ data: { name, email, password, role } })
        │
        ▼
  ⑤ Return response 201 (Created)
```

---

### 6. `src/app/api/auth/login/route.js` — API Login User

**Alur:**

```
Client POST { email, password }
        │
        ▼
  ① Cari user berdasarkan email
     prisma.users.findUnique({ where: { email } })
        │
        ▼
  ② Bandingkan password (hash vs plain text)
     bcrypt.compare(password, user.password)
        │
        ▼
  ③ Generate JWT token (berlaku 7 hari)
     jwt.sign({ userId, role, email }, JWT_SECRET, { expiresIn: "7d" })
        │
        ▼
  ④ Return token + data user
```

---

### 7. `.env` — Environment Variables

```
DATABASE_URL="postgresql://..."    ← URL koneksi ke database
JWT_SECRET="xxx"                   ← Secret key untuk sign JWT token
```

**Kegunaan:**

- Menyimpan **variabel sensitif** yang tidak boleh di-commit ke Git
- Next.js otomatis membaca file ini saat startup

---

### 8. `package.json` — Konfigurasi Project

```json
{
  "type": "module",          ← Penting! Memberitahu Node.js pakai ES Module (import/export)
  "dependencies": {
    "@prisma/client": "^7.3.0",
    "@prisma/adapter-pg": "..."   ← Driver adapter untuk Prisma v7
  }
}
```

---

## 🐛 Analisis Kesalahan & Cara Menghindarinya

### Kesalahan 1: Nama Model Tidak Cocok

| Salah ❌                   | Benar ✅                    | Alasan                          |
| -------------------------- | --------------------------- | ------------------------------- |
| `prisma.user.findUnique()` | `prisma.users.findUnique()` | Model di schema bernama `Users` |

**Aturan Prisma:**

- Model `Users` → accessor jadi `prisma.users` (huruf kecil semua)
- Model `Post` → accessor jadi `prisma.post`
- Model `UserProfile` → accessor jadi `prisma.userProfile`

> **Tips:** Selalu cek nama model di `schema.prisma` dan ubah ke **camelCase huruf kecil** saat dipakai di kode.

---

### Kesalahan 2: Field Tidak Ada di Schema

| Salah ❌            | Alasan                                          |
| ------------------- | ----------------------------------------------- |
| `tinggi_badan: 170` | Field `tinggi_badan` tidak ada di model `Users` |
| `berat_badan: 65`   | Field `berat_badan` tidak ada di model `Users`  |

> **Tips:** Sebelum menulis data ke database, pastikan field-nya **sudah terdefinisi** di `schema.prisma`. Jika butuh field baru, tambahkan dulu di schema lalu jalankan `npx prisma migrate dev`.

---

### Kesalahan 3: `datasourceUrl` Tidak Support di Prisma v7

| Versi        | Cara Koneksi                                                        |
| ------------ | ------------------------------------------------------------------- |
| Prisma ≤ 6   | `new PrismaClient({ datasourceUrl: "..." })` atau `url` di schema   |
| **Prisma 7** | `new PrismaClient({ adapter: new PrismaPg({ connectionString }) })` |

> **Tips:** Prisma v7 menghapus built-in database driver. Sekarang **wajib** pakai driver adapter (`@prisma/adapter-pg` untuk PostgreSQL).

---

### Kesalahan 4: `JWT_SECRET` Tidak Ada

```
Error: secretOrPrivateKey must have a value
```

Ini terjadi karena `process.env.JWT_SECRET` bernilai `undefined`.

> **Tips:** Sebelum pakai environment variable, pastikan sudah didefinisikan di `.env`. Cek dengan `console.log(process.env.JWT_SECRET)` jika ragu.

---

### Kesalahan 5: `"type": "module"` Tidak Ada

```
Warning: Module type of file is not specified
```

Kalau semua file pakai `import/export` (ES Module), maka `package.json` **harus** punya:

```json
"type": "module"
```

Tanpa ini, Node.js menganggap file sebagai CommonJS (`require/module.exports`).

---

## 📋 Checklist Sebelum Deploy / Push

- [ ] Semua field di `seed.js` ada di `schema.prisma`?
- [ ] Nama model di kode cocok dengan schema? (`Users` → `prisma.users`)
- [ ] `.env` punya semua variabel yang dibutuhkan? (`DATABASE_URL`, `JWT_SECRET`)
- [ ] `package.json` punya `"type": "module"`?
- [ ] Sudah jalankan `npx prisma generate` setelah ubah schema?
- [ ] Sudah jalankan `npx prisma migrate dev` setelah tambah/ubah field?

---

## 🔧 Perintah Penting

| Perintah                 | Kegunaan                                                       |
| ------------------------ | -------------------------------------------------------------- |
| `npx prisma generate`    | Generate Prisma Client dari schema (wajib setelah ubah schema) |
| `npx prisma migrate dev` | Buat & jalankan migration (saat tambah/ubah field/model)       |
| `npx prisma db seed`     | Isi data awal ke database                                      |
| `npx prisma studio`      | Buka GUI untuk lihat data di database                          |
| `pnpm dev`               | Jalankan Next.js development server                            |
