import React from "react";
import Navbar from "@/components/navbar";
import SlideUpAnimation from "@/components/slideUpAnimation";

async function page() {
  return (
    <>
      <main className="m-auto flex h-screen max-w-2xl flex-col text-black">
        <SlideUpAnimation>
          <Navbar />
          <h1 className="text-4xl font-semibold pt-8">
            This page is under Construction :/ Some of my work include:
          </h1>
          <div className="flex flex-col gap-3 pt-16">
            <p className="text-lg"><a href="https://www.supermemory.ai" className="underline underline-offset-2">supermemory.ai</a>, this was a team project with Dhravya and Kartik.</p>
            <a className="text-lg underline underline-offset-2" href="https://www.inspiring.lol">inspiring.lol</a>
            <p className="text-lg"><a className="underline underline-offset-2" href="https://www.concentrated.ai">Concentrated.ai</a>, this is a project under n&w s5 and under development</p>
            <p className="text-lg"><a className="underline underline-offset-2" href="https://www.torso.wtf">torso.wtf</a>, the site you are looking at :)</p>
          </div>
        </SlideUpAnimation>
      </main>
    </>
  );
}

export default page;
