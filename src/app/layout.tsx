import "~/styles/globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "torso.wtf",
  description: "torso.wtf",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
