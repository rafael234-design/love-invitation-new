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
  title: "💌 Surat Untuk Kamu",
  description: "Aku punya sesuatu untuk kamu buka ❤️",

  openGraph: {
    title: "💌 Surat Untuk Kamu",
    description: "Aku punya sesuatu untuk kamu buka ❤️",
    images: [
      {
        url:"https://love-invitation-new.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
       
       },
     ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
