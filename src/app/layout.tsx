import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin_Sans = Josefin_Sans({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "CodeTorso",
  description: "Blogs, Socials, and many more",
  openGraph: {
    images: [
      {
        url: "https://torso.wtf/og-image.png",
        width: 1125,
        height: 582,
        alt: "torso.wtf banner",
      },
    ],
  },
  metadataBase: {
    host: "https://torso.wtf",
    href: "/",
    origin: "https://torso.wtf",
    password: "torso",
    hash: "torso",
    pathname: "/",
    search: "",
    username: "torso",
    hostname: "torso.wtf",
    port: "",
    protocol: "https:",
    searchParams: new URLSearchParams(""),
    toString: () => "https://torso.wtf/",
    toJSON: () => "https://torso.wtf/",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://torso.wtf",
    creator: "https://torso.wtf",
    title: "@Codetorso's Portfolio",
    description:
      "Blogs, Socials, and many more.",
    images: [
      {
        url: "https://torso.wtf/og-image.png",
        width: 1125,
        height: 582,
        alt: "torso.wtf banner",
      },
    ],
  },
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
