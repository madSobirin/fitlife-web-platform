import prisma from "../src/lib/prisma.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

async function main() {
  console.log("🚀 Mulai seeding database...");

  const passwordAdmin = await bcrypt.hash("admin123", 10);
  const passwordUser = await bcrypt.hash("user123", 10);

  const admin = await prisma.users.upsert({
    where: { email: "admin@fitlife.id" },
    update: {},
    create: {
      email: "admin@fitlife.id",
      name: "Super Admin",
      password: passwordAdmin,
      role: "admin",
    },
  });

  const user = await prisma.users.upsert({
    where: { email: "wildan@gmail.com" },
    update: {},
    create: {
      email: "wildan@gmail.com",
      name: "Wildan Firdaus",
      password: passwordUser,
      role: "user",
    },
  });

  console.log("✅ Seeding selesai!", { admin, user });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
