import { type ComponentPropsWithoutRef } from "react";
import { Inter } from "next/font/google";
// old font -> Josefin_Sans
const josefin_Sans = Inter({ subsets: ["latin"], weight: ["400"] });
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="py-10 text-7xl font-extrabold text-neutral-300" {...props} />
  );
}

export function Paragraph(props: ComponentPropsWithoutRef<"p">) {
  return (
    <h1
      className={`py-2 text-xl font-normal leading-8 text-gray-300 ${GeistSans.className}`}
      {...props}
    />
  );
}
