"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

async function page() {
  return (
    <main className="text-whitetext-center m-auto flex h-screen flex-col items-center justify-center text-white md:max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Navbar />
        <h3 className="whitespace-nowrap text-[4vw] font-semibold lg:text-[2vw]">
          Hey there,
        </h3>
        <h1 className="whitespace-nowrap text-[8vw] font-semibold lg:text-[5vw]">
          I am @codetorso
        </h1>
      </motion.div>
    </main>
  );
}

export default page;
