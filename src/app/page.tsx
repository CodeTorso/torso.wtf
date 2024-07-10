import Home from "@/components/homecontent";
import Startscreen from "@/components/startscreen";
import React from "react";

export const runtime = "edge";

async function page() {
  return (
    <div className="bg-blue-700">
      <Startscreen />
      <main className="m-auto flex min-h-screen flex-col items-center justify-center px-4 text-white md:max-w-2xl md:px-0">
        <Home />
      </main>
    </div>
  );
}

export default page;
