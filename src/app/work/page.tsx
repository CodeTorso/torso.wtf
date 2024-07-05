"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

async function page() {
  return (
    <>
      <main className="m-auto flex h-screen max-w-2xl flex-col text-black">
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
