import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pinak Moharir",
  description: "Pinak Moharir Portfolio",
  icons: {
    icon: "/assets/namelogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PreloaderWrapper>
          {children}
        </PreloaderWrapper>
      </body>
    </html>
  );
}
