"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Auto-redirect to dashboard if user is authenticated, login page if not
    const hasToken = localStorage.getItem("auth_token");
    if (hasToken) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  }, [router]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-3xl font-bold">Medical Clinic Management System</h1>
        <Link href="/auth/login">Login</Link>
      </div>
    </main>
  };
}