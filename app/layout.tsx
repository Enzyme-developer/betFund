import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./base/Footer";
import Navbar from "./base/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyBetFund",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <div className="min-h-screen font-sans antialiased relative">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"></div>
            <Navbar /> */}
            {children}
            {/* <Footer /> */}
          {/* </div>
        </div> */}
      </body>
    </html>
  );
}
