import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zipda - AI가 찾아주는 진짜 내 집",
  description: "중개료는 그만, AI가 찾아주는 진짜 내 집!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <main className="max-w-[428px] mx-auto min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
