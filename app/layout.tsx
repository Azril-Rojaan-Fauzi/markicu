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
  title: "MARKICU. | Professional Sneaker Care & Restoration Atelier",
  description:
    "Modern archival footwear preservation, clinical sneaker restoration, and bespoke leather nourishment. Engineered with surgical discipline and architectural care.",
  verification: {
    google: "MTH6iWTq0kaIGbA12h-45EfjIrILQHhIk_G8HXWoUB0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#EDEDED] selection:bg-[#3B82F6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
