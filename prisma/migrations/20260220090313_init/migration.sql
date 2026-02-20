/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "accounts" (
    "id" BIGSERIAL NOT NULL,
    "nama_lengkap" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'user',
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "birthdate" TIMESTAMP(3),
    "weight" INTEGER,
    "height" INTEGER,
    "photo" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artikels" (
    "id" BIGSERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "penulis" TEXT NOT NULL DEFAULT 'Admin',
    "isi" TEXT NOT NULL,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "dibaca" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "artikels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kategori" (
    "id_kategori" BIGSERIAL NOT NULL,
    "nama_kategori" TEXT NOT NULL,

    CONSTRAINT "kategori_pkey" PRIMARY KEY ("id_kategori")
);

-- CreateTable
CREATE TABLE "makanan" (
    "id" BIGSERIAL NOT NULL,
    "nama_makanan" TEXT NOT NULL,
    "kalori" INTEGER NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "makanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menus" (
    "id" BIGSERIAL NOT NULL,
    "nama_menu" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "kalori" INTEGER NOT NULL,
    "waktu_memasak" INTEGER NOT NULL,
    "dibaca" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perhitungan" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "tinggi_badan" DOUBLE PRECISION NOT NULL,
    "berat_badan" DOUBLE PRECISION NOT NULL,
    "bmi" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "perhitungan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_username_key" ON "accounts"("username");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "artikels_slug_key" ON "artikels"("slug");

-- AddForeignKey
ALTER TABLE "perhitungan" ADD CONSTRAINT "perhitungan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
