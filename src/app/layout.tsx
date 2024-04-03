import "~/styles/globals.css";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "torso.wtf",
  description: "A portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="twitter:image" content="https://raw.githubusercontent.com/CodeTorso/torso.wtf/main/public/ogimg.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://raw.githubusercontent.com/CodeTorso/torso.wtf/main/public/ogimg.png" />
        <meta property="og:url" content="https://www.torso.wtf"></meta>
      </head>
      <body className={`bg-black font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
