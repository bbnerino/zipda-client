import React from "react";

// 서버 컴포넌트
export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[120px] h-[120px] mb-5">
        {/* 집 모양 */}
        <div className="absolute w-full h-full">
          <div className="relative w-full h-full">
            {/* 집 지붕 */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[50px]"
              style={{
                borderLeft: "50px solid transparent",
                borderRight: "50px solid transparent",
                borderBottom: "50px solid #0C54A0",
              }}
            />

            {/* 집 본체 */}
            <div className="absolute top-[40px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] bg-[#3995FF] rounded-md">
              {/* 창문 */}
              <div className="grid grid-cols-2 gap-1 p-4 pt-6">
                <div className="bg-[#0C54A0] h-[15px]"></div>
                <div className="bg-[#0C54A0] h-[15px]"></div>
                <div className="bg-[#0C54A0] h-[15px]"></div>
                <div className="bg-[#0C54A0] h-[15px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 로고 텍스트 */}
      <div className="text-[#0C3A5E] text-4xl font-bold">Zipda</div>
    </div>
  );
}
