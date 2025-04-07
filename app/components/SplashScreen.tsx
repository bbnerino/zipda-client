"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Logo from "./Logo";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // 3초 후에 로그인 페이지로 이동
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F9F9F6] px-5">
      <Logo />
    </div>
  );
}
