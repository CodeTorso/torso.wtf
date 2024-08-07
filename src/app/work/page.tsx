import React from "react";
import Navbar from "@/components/navbar";
import SlideUpAnimation from "@/components/slideUpAnimation";

async function page() {
  return (
    <div className="m-auto flex max-w-2xl flex-col">
      <SlideUpAnimation>
        <Navbar />
        <h1 className="pt-32 text-4xl font-semibold">
          This page is under Construction :/ Some of my work include:
        </h1>
        <div className="flex flex-col gap-3 pt-16">
          <p className="text-lg">
            <a
              target="_blank"
              href="https://www.supermemory.ai"
              className="underline underline-offset-2"
            >
              supermemory.ai
            </a>
            , this was a team project with Dhravya and Kartik.
          </p>
          <a
            target="_blank"
            className="text-lg underline underline-offset-2"
            href="https://www.inspiring.lol"
          >
            inspiring.lol
          </a>
          <p className="text-lg">
            <a
              target="_blank"
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
        <div className="flex flex-col gap-5 pb-20 pt-16">
          <p className="text-lg">
            <a
              target="_blank"
              className="underline underline-offset-2"
              href="https://www.concentrated.ai"
            >
              Concentrated.ai
            </a>
            , this is a project under n&w s5 (launching on 20th July)
          </p>
          <p className="text-lg">
            An AI application that simplifies creating flash cards with a
            powerful algorithm.
          </p>
          <p className="text-lg">
            Many Indian facts are hidden, and much of India&apos;s data is scattered.
            What if we gather it all in one place?
          </p>
          <p className="text-lg">
            Google&apos;s SEO does not rank good blogs well. What if we create a
            separate search engine for them? There are hundreds of blog
            websites, causing great articles to get lost.
          </p>
          <p className="text-lg">
            The T3 Stack is great. What if we add more features to it in a way
            that improves developer productivity?
          </p>
        </div>
      </SlideUpAnimation>
    </div>
  );
}

export default page;
