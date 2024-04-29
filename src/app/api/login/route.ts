import { NextRequest, NextResponse } from "next/server";
import githubLogin from "./githubLogin";

export async function POST(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const provider = searchParams.get("provider");

  if (!code || !provider) {
    return NextResponse.json(
      { message: "code와 provider가 필요합니다." },
      { status: 400 },
    );
  }

  let accessToken: string | null = null;
  let errorMessage: string | null = null;

  // Content-type: server가 받는 data type json일 때,
  // Accept: 내가 응답을 json 형식으로 받겠다..
  // next server: client, github server: server
  if (provider === "github") {
    const data = await githubLogin(code);
    accessToken = data.access_token;
    errorMessage = data.error_description;
  }

  if (errorMessage) {
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }

  if (!accessToken) {
    return NextResponse.error();
  }

  return NextResponse.json({ accessToken });
}
