import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSRT - Digital Smart Revise Technology",
  description: "Solusi Editing & Transformasi Digital dengan AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-[#cde9e9] font-sans">
        {children}
      </body>
    </html>
  );
}
