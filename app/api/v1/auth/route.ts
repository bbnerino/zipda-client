import { NextResponse } from "next/server";

// 로그인 API
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 실제로는 여기서 DB 연동 및 비밀번호 검증 등을 수행합니다
    // 이 예제에서는 단순하게 모의 응답을 반환합니다
    const mockToken = "mock_jwt_token_" + Date.now();

    // 응답 반환
    return NextResponse.json({
      success: true,
      token: mockToken,
      user: {
        id: "user_123",
        email,
        name: "홍길동",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "로그인에 실패했습니다.",
      },
      { status: 400 }
    );
  }
}
