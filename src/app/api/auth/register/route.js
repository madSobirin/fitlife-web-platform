// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    // 1. Validasi input sederhana
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Nama, Email, dan Password wajib diisi" },
        { status: 400 },
      );
    }
    // Validasi panjang password minimal 8 karakter
    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password minimal 8 karakter" },
        { status: 400 },
      );
    }
    // End validasi

    // 2. Cek apakah email sudah ada
    const existingUser = await prisma.account.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email sudah terdaftar" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.account.create({
      data: {
        username: name,
        email,
        password: hashedPassword,
        role: role || "user",
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        data: {
          id: newUser.id.toString(),
          username: newUser.username,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
