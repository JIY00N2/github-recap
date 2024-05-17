"use client";

import { GET_VIEWER } from "@/graphql/queries/getViewer";
import { ViewerQuery } from "@/graphql/schema";
import { useSuspenseQuery } from "@apollo/client";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const {
    data: {
      viewer: { login: userId },
    },
  } = useSuspenseQuery<ViewerQuery>(GET_VIEWER);

  useEffect(() => {
    if (accessToken) {
      redirect(`/user/${userId}`);
    }
  }, [accessToken, userId]);

  useEffect(() => {
    fetch(`/api/login?code=${code}&provider=github`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setAccessToken(data.accessToken));
  }, [code]);

  return (
    <>
      <span>나의 recap 생성 중..</span>
      <span>화면을 새로고침 하지 마세요!</span>
    </>
  );
}
