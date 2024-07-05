import React from "react";
import {motion} from "framer-motion"

function loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-green-900 text-white">
    <div className="text-[5vw] font-semibold">Loading...</div>
  </div>

  );
}

export default loading;