import { useEffect, type ComponentPropsWithoutRef, useRef } from "react";
import { Inter } from "next/font/google";
// old font -> Josefin_Sans
const josefin_Sans = Inter({ subsets: ["latin"], weight: ["400"] });
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import hljs from 'highlight.js';


export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="py-10 text-4xl font-extrabold text-neutral-300 md:text-7xl"
      {...props}
    />
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

// export function Code(props: ComponentPropsWithoutRef<"code">) {
//   const codeRef = useRef(null);

//   useEffect(() => {
//     if (codeRef.current) {
//       hljs.highlightElement(codeRef.current);
//     }
//   }, []);

//   return (
//     <div ref={codeRef}
//       className={`my-10 overflow-x-auto bg-[#212121] px-4 py-3 text-xl font-normal leading-8 text-gray-300 ${GeistSans.className}`}
//       {...props}
//     />
//   );
// }

export function Blockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return <blockquote {...props} className="border-l-8 border-white pl-4 italic text-[#4a5568]" />;
};
