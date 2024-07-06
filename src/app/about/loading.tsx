"use client";

import React from "react";
import { m } from "framer-motion";

function loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lime-300 text-black">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-[5vw] font-semibold"
      >
        Loading...
      </m.div>
    </div>
  );
}

export default loading;
