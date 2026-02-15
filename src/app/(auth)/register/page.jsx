import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Register",
  description: "Register",
};

const Register = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <form
          action=""
          className="flex flex-col gap-5 bg-gray-300 p-4 rounded-2xl"
        >
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded border"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded border"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded border"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Register
          </button>
          <p className="text-center">
            Sudah Punya Akun?{" "}
            <Link href="/login" className="text-blue-500">
              <span className="font-bold">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
