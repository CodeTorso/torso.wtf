import Home from "@/components/homecontent";
import SlideUpAnimation from "@/components/slideUpAnimation";
import React from "react";

async function page() {
  return (
    <div className="bg-blue-700">
      <main className="m-auto flex min-h-screen flex-col items-center justify-center px-4 text-white md:max-w-2xl md:px-0">
        <SlideUpAnimation>
          <Home />
        </SlideUpAnimation>
      </main>
    </div>
  );
}

export default page;
