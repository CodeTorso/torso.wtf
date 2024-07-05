"use client";

import React from "react";
// @ts-ignore
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

async function page() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 10 }}
        className="pointer-events-none fixed flex h-screen w-full items-center justify-center bg-green-900 text-white"
      >
        <div className="text-[5vw] font-semibold">Loading...</div>
      </motion.div>
      <main className="m-auto flex h-screen max-w-2xl flex-col text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Navbar />
        </motion.div>
      </main>
    </>
  );
}

export default page;
