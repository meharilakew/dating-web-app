import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomBackgroundComponent from "./components/background";
// import Bg from "@/components/Background/bg";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Bg /> */}
      <body>
        <CustomBackgroundComponent />
        <div className="absolute top-0 left-0 w-full h-full">{children}</div>
      </body>
    </html>
  );
}
