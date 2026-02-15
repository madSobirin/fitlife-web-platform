"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../services/auth.service";

export const useLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Panggil Service
      // Cookie token otomatis di-set oleh API route (server-side, httpOnly)
      await loginUser(formData);

      alert("Login Berhasil! Mengalihkan...");
      router.push("/");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
  };
};
