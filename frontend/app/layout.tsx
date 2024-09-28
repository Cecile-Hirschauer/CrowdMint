import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "CrowdMint",
  description:
    "A crowdfunding dApp where innovative projects are funded through tokenized pre-sales, empowering creators and backers with Mintz tokens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark" style={{ colorScheme: "dark" }}>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased h-full max-w-xl m-auto px-4 bg-background text-foreground`
        )}
      >
        {children}
      </body>
    </html>
  );
}
