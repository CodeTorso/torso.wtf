"use client";

import React, { useEffect } from "react";
import {motion} from "framer-motion"

function LoaderAnimation({bg}: {bg:string}) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: 10 }}
      className={`pointer-events-none fixed flex h-screen w-full items-center justify-center text-white ${bg}`}
    >
      <div className="text-[5vw] font-semibold">Loading...</div>
    </motion.div>
  );
}

export default LoaderAnimation;
