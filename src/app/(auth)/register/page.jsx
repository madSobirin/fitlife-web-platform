"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRegister } from "@/features/auth/hooks/useRegister";

export default function Register() {
  const router = useRouter();
  const { submit, loading, errors } = useRegister(router);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(form);
        }}
        className="flex flex-col gap-5 bg-gray-300 p-4 rounded-2xl"
      >
        <h1 className="text-2xl font-bold text-center">Register</h1>

        {errors.general && (
          <p className="text-red-600 text-sm text-center">{errors.general}</p>
        )}

        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 rounded border w-full"
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 rounded border w-full"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 rounded border w-full"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {loading ? "Loading..." : "Register"}
        </button>

        <p className="text-center">
          Sudah Punya Akun?{" "}
          <Link href="/login" className="text-blue-500 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
