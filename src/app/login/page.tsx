"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken) {
      return;
    }
    fetch(`/api/login?code=${code}&provider=github`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setAccessToken(data.accessToken));
  }, [code, accessToken]);

  return (
    <>
      <span>We are logging you in</span>
      <span>{"Don't refresh page"}</span>
      <span>{accessToken}</span>
    </>
  );
}
