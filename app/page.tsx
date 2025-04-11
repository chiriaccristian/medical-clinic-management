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
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
          Medical Clinic Management System
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Complete solution for patient appointments, medical records, and clinic management
        </p>
        
        <div className="space-y-4">
          <Link
            href="/auth/login"
            className="block w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground text-center font-medium hover:bg-primary/90 transition-colors"
          >
            Sign In
          </Link>
          
          <Link
            href="/auth/register"
            className="block w-full py-3 px-4 rounded-lg bg-secondary text-secondary-foreground text-center font-medium hover:bg-secondary/90 transition-colors"
          >
            Create an Account
          </Link>
          
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Link
              href="/appointments"
              className="text-primary hover:underline"
            >
              Appointments
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/dashboard"
              className="text-primary hover:underline"
            >
              Dashboard
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/patients"
              className="text-primary hover:underline"
            >
              Patients
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-muted-foreground text-sm">
          &copy; 2025 Medical Clinic System
        </div>
      </div>
    </main>
  );
}