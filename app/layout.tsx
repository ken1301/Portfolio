import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuan Kiet — Full-stack engineer",
  description:
    "Portfolio of Tuan Kiet, a full-stack engineer building scalable web systems and high-performance interfaces.",
  authors: [{ name: "Tuan Kiet" }],
  creator: "Tuan Kiet",
  keywords: ["Tuan Kiet", "full-stack engineer", "Next.js", "React", "TypeScript", "product engineering"],
  openGraph: {
    title: "Tuan Kiet — Full-stack engineer",
    description: "Selected product systems, interfaces and engineering work by Tuan Kiet.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tuan Kiet — Full-stack engineer",
    description: "Selected product systems, interfaces and engineering work by Tuan Kiet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
