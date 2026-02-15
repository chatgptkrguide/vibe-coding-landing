import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 바이브 코딩 부트캠프 | 코드 없이 프로덕트를 만드는 4주",
  description:
    "AI와 함께 아이디어를 현실로. Claude, Cursor, v0를 활용한 실전 바이브 코딩 부트캠프. 비개발자도 4주 만에 나만의 웹서비스를 런칭하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen text-white`}
      >
        {children}
      </body>
    </html>
  );
}
