import React from "react";
import Navbar from "@/components/navbar";

export const runtime = "edge";

async function page() {
  return (
    <div className="bg-blue-700">
      <main className="text-whitetext-center m-auto flex min-h-screen flex-col items-center justify-center px-6 text-white md:max-w-2xl">
        <SlideUpAnimation>
          <Navbar />
          <Content />
        </SlideUpAnimation>
      </main>
    </div>
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
        and I love making things that occasionally help people, plus I do some
        content creation for fun, and writing blogs about various development
        concepts.
      </h2>
      <Contact />
      <div className="flex items-center gap-3 text-2xl font-semibold">
        <Github />•
        <Discord />•
        <X />
        {/* Once I have Content there also */}
        {/* <YouTube />•
        <Instagram /> */}
      </div>
    </div>
  );
}
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaGithub,
} from "react-icons/fa6";
import SlideUpAnimation from "@/components/slideUpAnimation";

function Discord() {
  return (
    // thanks Devansh for the https://x.com/Devansh_1405 dm invite link.
    <a href="https://discord.com/users/1101577942624129117">
      <FaDiscord />
    </a>
  );
}

function Github() {
  return (
    <a href="https://github.com/codetorso">
      <FaGithub />
    </a>
  );
}

function X() {
  return (
    <a className="flex items-center gap-1" href="https://x.com/codetorso" target="_blank">
      <FaTwitter />
      <h3> / 1076 Posts</h3>
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
