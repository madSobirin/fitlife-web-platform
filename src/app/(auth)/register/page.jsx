"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    <div className="min-h-screen flex bg-[#f8fcf9] overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center bg-[#f0fdf4]">
        {/* Background effect */}
        <div className="absolute inset-0 skew-x-[-6deg] bg-[#e6f9ee] origin-top-left -ml-20 w-[120%]" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-16">
          {/* IMAGE */}
          <div className="w-[420px] h-[420px] relative">
            <Image
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800"
              alt="Dumbbell"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-black leading-tight text-gray-900">
              Design your body. <br />
              Defy your limits.
            </h2>
            <p className="text-gray-500 mt-4">Next Gen Performance Platform</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* HEADER */}
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              Unlock Your Potential
            </h1>
            <p className="text-gray-500 mt-2">
              Create your profile to access elite tracking and coaching.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(form);
            }}
            className="space-y-5"
          >
            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}

            {/* NAME */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                onChange={handleChange}
                className="w-full mt-2 h-14 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1ded73] transition"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                onChange={handleChange}
                className="w-full mt-2 h-14 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1ded73] transition"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a secure password"
                onChange={handleChange}
                className="w-full mt-2 h-14 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1ded73] transition"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1 w-4 h-4" />
              <span>
                I agree to the{" "}
                <span className="font-semibold underline cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="font-semibold underline cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-[#1ded73] hover:bg-[#15d665] text-black font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              {loading ? "Loading..." : "Create Account"}
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link href="/login" className="font-bold hover:text-[#1ded73]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
