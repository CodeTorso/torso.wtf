import { GeistSans } from "geist/font/sans";

import React from "react";
import Navbar from "@/components/navbar";
import SlideUpAnimation from "@/components/slideUpAnimation";

async function page() {
  return (
    <>
      <main className="flex justify-center">
        <SlideUpAnimation>
          <div className="m-auto max-w-2xl">
            <Navbar />
          </div>
          <div
            className={`flex max-w-4xl flex-col gap-5 pb-20 pt-32 text-justify text-xl leading-relaxed tracking-normal ${GeistSans.className}`}
          >
            <p>
              I&apos;m just an ordinary teenager currently living in India. My
              first exposure to programming came in 2019 when I learned about
              C++ in school. I built a simple calculator on my phone and proudly
              showed it to everyone—and that was it for the time.
            </p>
            <p>
              In November of 2021, I got my first laptop, which opened up new
              possibilities. I really got into programming in 2022, dedicating
              two hours every day after school to learning. However, due to my
              board exams that year, I had to put my coding dreams on hold for
              another year.
            </p>
            <p>
              From 2023 onwards, I had two years of relative freedom to explore
              and create. During this time, I delved into various areas such as
              Chrome extension development and web programming. Through these
              experiences, I discovered my passion for building things. Since
              then, the journey has been incredibly rewarding and exciting.
            </p>
          </div>
        </SlideUpAnimation>
      </main>
    </>
  );
}

export default page;
