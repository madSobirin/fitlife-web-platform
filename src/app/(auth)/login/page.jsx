"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <form
          action=""
          className="flex flex-col gap-5 bg-gray-300 p-4 rounded-2xl"
        >
          <h1 className="text-2xl font-bold text-center">Login</h1>

          {registered && (
            <p className="text-green-600 text-sm text-center">
              ✅ Akun berhasil dibuat, silakan login
            </p>
          )}

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
            Login
          </button>
          <p className="text-center">
            Belum Punya Akun?{" "}
            <Link href="/register" className="text-blue-500">
              <span className="font-bold">Daftar</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
