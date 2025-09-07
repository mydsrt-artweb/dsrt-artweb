import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DSRT — Digital Smart Revise Technology",
  description: "AI-powered creative editor for photo, video, logo, and more",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "DSRT — Digital Smart Revise Technology",
    description: "AI-powered creative editor for photo, video, logo, and more",
    url: "https://dsrt-artweb.vercel.app",
    siteName: "DSRT",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "DSRT Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
