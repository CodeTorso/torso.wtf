import React from "react";
import { motion } from "framer-motion";

function loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-300 text-black">
      <div className="text-[5vw] font-semibold">Loading...</div>
    </div>
  );
}

export default loading;
