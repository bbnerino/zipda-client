import React from "react";
import MainLayout from "../components/MainLayout";
import PropertyCard from "../components/PropertyCard";

export default function MainPage() {
  // 샘플 매물 데이터
  const sampleProperties = [
    {
      id: "prop1",
      title: "최저가 @ 구조 좋은 풀옵션 투룸",
      type: "월세",
      buildingName: "레드하임",
      address: "부산 사상구",
      floor: "4",
      area: 38.41,
      managementFee: 200000,
      deposit: 30000000,
      monthlyRent: 1200000,
    },
    {
      id: "prop2",
      title: "채광 좋은 남향 원룸, 즉시 입주 가능",
      type: "전세",
      buildingName: "블루타워",
      address: "부산 해운대구",
      floor: "7",
      area: 45.12,
      managementFee: 150000,
      deposit: 180000000,
    },
    {
      id: "prop3",
      title: "역세권 신축 오피스텔, 풀옵션",
      type: "월세",
      buildingName: "그린하우스",
      address: "부산 부산진구",
      floor: "3",
      area: 26.45,
      managementFee: 100000,
      deposit: 10000000,
      monthlyRent: 700000,
    },
  ];

  return (
    <MainLayout>
      <div className="p-4">
        {/* 상단 헤더 */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">Zipda</h1>
          <p className="text-sm text-gray-600 mt-1">
            부산 지역 부동산 매물을 확인해보세요!
          </p>
        </div>

        {/* 검색창 */}
        <div className="bg-white rounded-lg shadow-md p-3 mb-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="지역, 매물명, 키워드 검색"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* 지역 필터 */}
        <div className="bg-white rounded-lg shadow-sm p-3 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-sm">부산</h2>
            <span className="text-xs text-gray-500">전체 &gt;</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["부산진구", "수영구", "연제구", "해운대구", "동래구"].map(
              (item) => (
                <button
                  key={item}
                  className="text-xs bg-gray-100 rounded-full px-3 py-1"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* 추천 매물 */}
        <h2 className="font-bold text-lg mb-3">추천 매물</h2>
        <div className="space-y-4">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
