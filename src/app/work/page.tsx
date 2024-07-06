import React from "react";
import Navbar from "@/components/navbar";
import SlideUpAnimation from "@/components/slideUpAnimation";

async function page() {
  return (
    <main className="min-h-screen m-auto flex max-w-2xl flex-col px-6 text-black">
      <SlideUpAnimation>
        <Navbar />
        <h1 className="pt-8 text-4xl font-semibold">
          This page is under Construction :/ Some of my work include:
        </h1>
        <div className="flex flex-col gap-3 pt-16">
          <p className="text-lg">
            <a
              href="https://www.supermemory.ai"
              className="underline underline-offset-2"
            >
              supermemory.ai
            </a>
            , this was a team project with Dhravya and Kartik.
          </p>
          <a
            className="text-lg underline underline-offset-2"
            href="https://www.inspiring.lol"
          >
            inspiring.lol
          </a>
          <p className="text-lg">
            <a
              className="underline underline-offset-2"
              href="https://www.torso.wtf"
            >
              torso.wtf
            </a>
            , the site you are looking at :)
          </p>
        </div>
        <h1 className="pt-8 text-4xl font-semibold">
          Upcoming projects I am working on:
        </h1>
        <div className="flex flex-col gap-5 pt-16">
          <p className="text-lg">
            <a
              className="underline underline-offset-2"
              href="https://www.concentrated.ai"
            >
              Concentrated.ai
            </a>
            , this is a project under n&w s5 (launching on 20th July)
          </p>
          <p className="text-lg">
            An AI application that simplifies creating flash cards, with a
            powerful algorthm
          </p>
          <p className="text-lg">
            A lot of indian facts are hidden, a lot of india&apos;s data is
            scattered what if we gather it all at one place
          </p>
          <p className="text-lg">
            Google&apos;s SEO does not rank good blogs well. What if we create a
            separate search engine for that
          </p>
        </div>
      </SlideUpAnimation>
    </main>
  );
}

export default page;
