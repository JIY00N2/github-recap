import type { Metadata } from "next";
import { ApolloWrapper } from "@/lib/ApolloWrapper";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Recap",
  description: "welcome~",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ApolloWrapper>
        <body className={inter.className}>{children}</body>
      </ApolloWrapper>
    </html>
  );
}
