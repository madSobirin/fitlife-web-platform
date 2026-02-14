# 🚀 FitLife Web Platform

This project is built using [Next.js](https://nextjs.org).

---

## 📦 Getting Started (Pertama Kali Clone)

### 1. Install dependencies

```bash
pnpm install
```

### 2. Setup environment variables

Copy `.env.example` ke `.env`, lalu isi value-nya:

```bash
cp .env.example .env
```

Edit `.env` dan isi:

- `DATABASE_URL` → connection string PostgreSQL kamu (pastikan PostgreSQL sudah jalan)
- `JWT_SECRET` → bebas, untuk signing JWT token

### 3. Setup database (Prisma)

```bash
npx prisma migrate dev
npx prisma db seed
```

### 4. Jalankan server

```bash
pnpm dev
```
