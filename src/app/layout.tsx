import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

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
  title: "Pic Scribe",
  description: "Your creative friend to transform your words into images",
  openGraph: {
    title: "Pic Scribe",
    description: "Your creative friend to transform your words into images",
    images: [
      {
        url: "/assets/images/og1.png",
        width: 1200,
        height: 630,
        alt: "PicScribe AI Image Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pic Scribe",
    description:
      "Convert your thoughts into words and transform your words into images using your friend PicScribe",
    images: ["/twitter-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
