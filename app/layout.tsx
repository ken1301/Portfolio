import type { Metadata } from "next";
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RedBinaryRain } from "@/components/RedBinaryRain";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Tuấn Kiệt Đỗ Lê — Full-stack Developer Intern",
  description:
    "Portfolio of Tuấn Kiệt Đỗ Lê, a full-stack developer intern building web, mobile and AI systems.",
  authors: [{ name: "Tuấn Kiệt Đỗ Lê" }],
  creator: "Tuấn Kiệt Đỗ Lê",
  alternates: { canonical: "/" },
  keywords: ["Tuấn Kiệt Đỗ Lê", "full-stack developer intern", "Next.js", "React", "TypeScript", "AI systems"],
  openGraph: {
    title: "Tuấn Kiệt Đỗ Lê — Full-stack Developer Intern",
    description: "Selected product systems, interfaces and engineering work by Tuấn Kiệt Đỗ Lê.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuấn Kiệt Đỗ Lê — Full-stack Developer Intern",
    description: "Selected product systems, interfaces and engineering work by Tuấn Kiệt Đỗ Lê.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <RedBinaryRain />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
