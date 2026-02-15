"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLogin } from "@/features/auth/hooks/useLogin";

const Login = () => {
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");

  const { formData, handleChange, handleSubmit, isLoading, error } = useLogin();

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-gray-300 p-4 rounded-2xl w-full max-w-xs shadow-lg"
        >
          <h1 className="text-2xl font-bold text-center">Login</h1>

          {/* Notifikasi dari Register */}
          {registered && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded text-sm text-center">
              ✅ Akun berhasil dibuat, silakan login
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm text-center">
              ❌ {error}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`p-2 rounded text-white font-semibold transition-colors ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? "Memproses..." : "Login"}
          </button>

          <p className="text-center text-sm">
            Belum Punya Akun?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              <span className="font-bold">Daftar</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
