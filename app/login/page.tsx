import React from "react";
import Logo from "../components/Logo";
import LoginButtons from "../components/LoginButtons";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F9F9F6] px-5 py-8">
      <div className="mb-8">
        <Logo />
      </div>

      <h1 className="text-center font-bold text-base mb-10">
        중개료는 그만, AI가 찾아주는 진짜 내 집!
      </h1>

      <LoginButtons />
    </div>
  );
}
