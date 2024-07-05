import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin_Sans = Josefin_Sans({ subsets: ["latin"], weight: ["500"] });

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
      <body className={`${josefin_Sans.className} bg-blue-700`}>{children}</body>
    </html>
  );
}
