import { type ComponentPropsWithoutRef } from 'react';
import { Inter } from "next/font/google";
// old font -> Josefin_Sans
const josefin_Sans = Inter({ subsets: ["latin"], weight: ["400"] });
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


export function Heading(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1  className="text-7xl text-neutral-300 font-extrabold py-10" {...props} />;
}

export function Paragraph(props: ComponentPropsWithoutRef<'p'>) {
  return <h1  className={`text-xl text-gray-300 font-normal py-2 leading-8  ${GeistSans.className}`} {...props} />;
}
