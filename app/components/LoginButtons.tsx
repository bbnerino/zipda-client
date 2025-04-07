"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LoginButtons() {
  const router = useRouter();

  const handleGoogleLogin = () => {
    // Google 로그인 로직 구현
    console.log("구글 로그인 클릭");
    // 로그인 후 메인 페이지로 이동
    // router.push('/main');
  };

  const handleKakaoLogin = () => {
    // Kakao 로그인 로직 구현
    console.log("카카오 로그인 클릭");
    // 로그인 후 메인 페이지로 이동
    // router.push('/main');
  };

  const handleGuestLogin = () => {
    // 게스트 로그인 로직
    console.log("게스트 로그인 클릭");
    // 게스트로 메인 페이지 이동
    router.push("/main");
  };

  return (
    <div className="w-full space-y-4">
      <button
        className="w-full bg-[#3995FF] text-white py-3 rounded-lg font-bold text-sm"
        onClick={handleGoogleLogin}
      >
        Google 로그인
      </button>

      <button
        className="w-full bg-[#FFED62] text-black py-3 rounded-lg font-bold text-sm"
        onClick={handleKakaoLogin}
      >
        Kakao 로그인
      </button>

      <button
        className="w-full bg-white text-black py-3 rounded-lg font-bold text-sm border border-[#3995FF]"
        onClick={handleGuestLogin}
      >
        게스트
      </button>
    </div>
  );
}
