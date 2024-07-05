"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

async function page() {
  return (
    <main className="px-2 text-whitetext-center m-auto flex h-screen flex-col items-center justify-center text-white md:max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Navbar />
        <Content />
      </motion.div>
    </main>
  );
}

function Content() {
  return (
    <div className="py-4">
      <h3 className="whitespace-nowrap text-[4vw] font-semibold leading-none lg:text-[2vw]">
        Hey there,
      </h3>
      <h1 className="whitespace-nowrap text-[8vw] font-semibold lg:text-[5vw]">
        I am @codetorso
      </h1>
      <h2 className="text-2xl font-semibold">
        and I love making things that occasionally help people, plus I have a
        hundred unfinished projects.
      </h2>

    </div>
  );
}
import { FaTwitter, FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa6";

function Discord() {
  return (
    <a href="https://discord.gg/f6fQDDRG">
      <FaDiscord />
    </a>
  );
}

function X() {
  return (
    <a href="https://x.com/codetorso" target="_blank" className="flex gap-1">
      <FaTwitter />
      <h3> / 1065 Posts</h3>
    </a>
  );
}

function YouTube() {
  return (
    <div className="flex gap-1">
      <FaYoutube />
      <h3>/ No Content</h3>
    </div>
  );
}

function Instagram() {
  return (
    <div className="flex gap-1">
      <FaInstagram />
      <h3>/ No Content</h3>
    </div>
  );
}

function Contact() {
  return (
    <h2 className="py-4 text-2xl font-semibold">
      Wanna chat ? send a{" "}
      <a
        className="underline underline-offset-4"
        href="https://x.com/codetorso"
        target="_blank"
      >
        DM
      </a>{" "}
      or{" "}
      <a className="underline underline-offset-4" href="mailto:hey@torso.wtf">
        Email.
      </a>
    </h2>
  );
}

export default page;
