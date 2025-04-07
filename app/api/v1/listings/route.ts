import { NextResponse } from "next/server";

// 매물 목록 조회
export async function GET(request: Request) {
  try {
    // URL에서 쿼리 파라미터 추출
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const location = searchParams.get("location");

    // 실제로는 DB에서 조회하는 로직이 들어갑니다
    // 이 예제에서는 모의 데이터를 반환합니다
    const mockListings = [
      {
        id: "listing_1",
        title: "최저가 @ 구조 좋은 풀옵션 투룸",
        buildingName: "레드하임",
        addressDong: "사상구",
        type: "월세",
        deposit: 3000000,
        monthlyRent: 1200000,
        area: 38.41,
        floor: "4/8",
        managementFee: 200000,
        managementItems: ["인터넷", "유선", "수도"],
        confirmedAt: new Date().toISOString(),
        images: ["https://example.com/image1.jpg"],
        location: {
          address: "부산 사상구",
          lat: 35.1595,
          lng: 129.0756,
        },
      },
      {
        id: "listing_2",
        title: "채광 좋은 남향 원룸",
        buildingName: "블루타워",
        addressDong: "해운대구",
        type: "전세",
        deposit: 180000000,
        area: 45.12,
        floor: "7/12",
        managementFee: 150000,
        managementItems: ["인터넷", "유선", "수도", "전기"],
        confirmedAt: new Date().toISOString(),
        images: ["https://example.com/image2.jpg"],
        location: {
          address: "부산 해운대구",
          lat: 35.1631,
          lng: 129.1634,
        },
      },
    ];

    // 필터링 로직 (실제로는 DB 쿼리에서 처리)
    let filteredListings = [...mockListings];
    if (type) {
      filteredListings = filteredListings.filter(
        (listing) => listing.type === type
      );
    }
    if (location) {
      filteredListings = filteredListings.filter(
        (listing) =>
          listing.addressDong.includes(location) ||
          listing.location.address.includes(location)
      );
    }

    return NextResponse.json({
      success: true,
      data: filteredListings,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "매물 목록 조회에 실패했습니다.",
      },
      { status: 500 }
    );
  }
}
