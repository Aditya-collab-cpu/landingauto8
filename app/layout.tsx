import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "moreleadz — AI-Powered Lead Response Automation",
  description:
    "Never miss another lead. moreleadz automatically responds to every lead in seconds with personalized AI emails, helping your business convert more prospects without manual work.",
  keywords: "AI lead automation, lead response, email automation, CRM automation, lead management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
