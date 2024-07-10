import Home from "@/components/homecontent";
import Startscreen from "@/components/startscreen";
import React from "react";

export const runtime = "edge";

async function page() {
  return (
    <div className="bg-blue-700">
      <Startscreen />
      <Home />
    </div>
  );
}

export default page;
