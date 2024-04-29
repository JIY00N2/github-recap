"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <Link
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
    >
      나의 recap 생성하기
    </Link>
  );
}
