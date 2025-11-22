import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import type { ReactNode } from "react";
import { NavBar } from "@/components/nav-bar";
import { ChatBot } from "@/components/chat-bot";
import "./globals.css";

const sarabun = Sarabun({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["thai", "latin"],
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "ระบบบริหารจัดการสหกรณ์การเกษตร",
  description: "ระบบสารสนเทศเพื่อการบริหารจัดการสหกรณ์การเกษตรแห่งชาติ รองรับหลายสหกรณ์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${sarabun.variable} font-sans bg-background text-foreground antialiased flex min-h-screen flex-col`}
      >
        <NavBar />
        <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-4 px-4 py-6">
          {children}
        </main>
        <ChatBot />
      </body>
    </html>
  );
}
