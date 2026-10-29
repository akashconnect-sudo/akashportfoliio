"use client";

import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import PortfolioAIChat from "@/components/PortfolioAIChat";
import AmazonConnectWidget from "@/components/AmazonConnectWidget";
import useShowLoader from "@/hooks/useShowLoader";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const showLoader = useShowLoader();

  return (
    <html lang="en" className={`${lexend.variable} h-full`}>
      <body className={`${lexend.className} site-shell min-h-full antialiased`}>
        {showLoader && <LoadingScreen />}
        <Navbar />
        <main>{!showLoader && children}</main>
        <Footer />
        {!showLoader && <PortfolioAIChat />}
        <AmazonConnectWidget />
      </body>
    </html>
  );
}
