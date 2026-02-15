// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. Cari User berdasarkan Email
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Email atau Password salah" },
        { status: 401 },
      );
    }

    // 2. Bandingkan Password (Hash vs Plain)
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Email atau Password salah" },
        { status: 401 },
      );
    }

    // 3. Generate Token JWT
    // Token ini nanti dipakai Orang B (Mobile) untuk request data
    const token = jwt.sign(
      { userId: user.id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }, // Token berlaku 3 hari
    );

    // 4. Response Sukses + Set Cookie
    const res = NextResponse.json({
      message: "Login berhasil",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    // Set token sebagai httpOnly cookie (tidak bisa diakses JavaScript)
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3 * 24 * 60 * 60, // 3 hari dalam detik
      path: "/",
    });

    return res;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
