import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/provider/query-client-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senaigram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <Toaster />
            <QueryProvider>{children}</QueryProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
