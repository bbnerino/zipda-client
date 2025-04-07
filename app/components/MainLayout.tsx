import React from "react";
import NavigationBar from "./NavigationBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background max-w-mobile mx-auto relative">
      {/* 메인 컨텐츠 영역 */}
      <div className="flex-1 overflow-y-auto pb-20">{children}</div>

      {/* 하단 네비게이션 바 */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <div className="max-w-mobile mx-auto">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}
