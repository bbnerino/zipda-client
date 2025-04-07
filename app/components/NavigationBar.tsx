"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "홈", path: "/main", icon: "🏠" },
    { name: "지도", path: "/map", icon: "🗺️" },
    { name: "AI 검색", path: "/ai-search", icon: "🔍" },
    { name: "찜", path: "/favorites", icon: "❤️" },
    { name: "내 정보", path: "/profile", icon: "👤" },
  ];

  return (
    <div className="bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              pathname === item.path ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => router.push(item.path)}
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-xs">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
