"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "./context/SidebarContext";
// import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";

export const metadata: Metadata = {
  title: "MyBetFund",
  description: "We Fund. You bet. We pay you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Windmill usePreferences>
        <html lang="en">
          <body>
            <div className="min-h-screen font-sans antialiased relative">
              <div className="relative">{children}</div>
            </div>
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    background: "green",
                    color: "white",
                  },
                },
                error: {
                  style: {
                    background: "red",
                    color: "white",
                  },
                },
              }}
            />
          </body>
        </html>
      </Windmill>
    </SidebarProvider>
  );
}
