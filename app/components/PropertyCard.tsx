"use client";

import React from "react";
import Image from "next/image";

interface PropertyCardProps {
  id: string;
  title: string;
  type: string;
  buildingName: string;
  address: string;
  floor: string;
  area: number;
  managementFee: number;
  deposit: number;
  monthlyRent?: number;
  imageUrl?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
}

export default function PropertyCard({
  id,
  title,
  type,
  buildingName,
  address,
  floor,
  area,
  managementFee,
  deposit,
  monthlyRent,
  imageUrl,
  isFavorite = false,
  onFavoriteToggle,
}: PropertyCardProps) {
  // 월세/전세 표시 텍스트
  const priceText =
    type === "전세"
      ? `전세 ${deposit / 10000}만`
      : `월세 ${deposit / 10000}/${monthlyRent}만`;

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100">
      {/* 이미지 영역 */}
      <div className="relative h-48 bg-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            이미지 없음
          </div>
        )}

        {/* 찜 버튼 */}
        <button
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center"
          onClick={() => onFavoriteToggle && onFavoriteToggle(id)}
        >
          {isFavorite ? (
            <span className="text-lg">❤️</span>
          ) : (
            <span className="text-lg">🤍</span>
          )}
        </button>
      </div>

      {/* 정보 영역 */}
      <div className="p-3">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-base">{priceText}</h3>
        </div>
        <p className="text-xs text-gray-600 mt-1">
          {buildingName} - {address}
        </p>
        <p className="text-xs text-gray-600">
          {floor}층, {area}m², 관리비 {managementFee / 10000}만
        </p>
        <p className="text-xs text-primary mt-1 truncate">{title}</p>
      </div>
    </div>
  );
}
