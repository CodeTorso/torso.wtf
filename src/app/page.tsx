"use client";

import React from "react";
import { motion } from "framer-motion";

async function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 10 }}
        className="pointer-events-none fixed flex h-screen w-full items-center justify-center bg-blue-900 text-white"
      >
        <div className="text-[5vw] font-semibold">Loading...</div>
      </motion.div>
      <main className="m-auto flex h-screen max-w-2xl flex-col text-whitetext-center  items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[5vw] font-semibold whitespace-nowrap">
            Under Construction :/
          </h1>
        </motion.div>
      </main>
    </>
  );
}

export default page;
