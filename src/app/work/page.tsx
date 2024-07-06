import React from "react";
import Navbar from "@/components/navbar";
import SlideUpAnimation from "@/components/slideUpAnimation";

async function page() {
  return (
    <>
      <main className="m-auto flex h-screen max-w-2xl flex-col text-black">
        <SlideUpAnimation>
          <Navbar />
        </SlideUpAnimation>
      </main>
    </>
  );
}

export default page;
