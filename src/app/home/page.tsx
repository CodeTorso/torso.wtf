import Home from "@/components/homecontent";
import SlideUpAnimation from "@/components/slideUpAnimation";
import React from "react";

export const runtime = "edge";

async function page() {
  return (
    <div className="bg-blue-700">
      <SlideUpAnimation>
        <Home />
      </SlideUpAnimation>
    </div>
  );
}

export default page;
