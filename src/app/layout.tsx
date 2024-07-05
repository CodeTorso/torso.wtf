import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Josefin_Sans({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "CodeTorso",
  description: "Blogs, Socials, and many more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-blue-900`}>{children}</body>
    </html>
  );
}
