import React from "react";
import Navbar from "@/components/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Content />
    </>
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
        <X />•{/* Once I have Content there also */}
        <YouTube />
        {/* <Instagram /> */}
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

function Discord() {
  return (
    // thanks Devansh for the https://x.com/Devansh_1405 dm invite link.
    <a target="_blank" href="https://discord.com/users/1101577942624129117">
      <FaDiscord />
    </a>
  );
}

function Github() {
  return (
    <a target="_blank" href="https://github.com/codetorso">
      <FaGithub />
    </a>
  );
}

function X() {
  return (
    <a
      className="flex items-center gap-1"
      href="https://x.com/codetorso"
      target="_blank"
    >
      <FaTwitter />
      <h3 className="hidden md:block"> / 1076 Posts</h3>
    </a>
  );
}

function YouTube() {
  return (
    <a
      href="https://www.youtube.com/@CodeTorso"
      target="_blank"
      className="flex items-center gap-1"
    >
      <FaYoutube />
      <h3 className="hidden md:block">/ 1 Video</h3>
    </a>
  );
}

function Instagram() {
  return (
    <div className="flex gap-1">
      <FaInstagram />
      {/* <h3>/ No Content</h3> */}
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
      <a
        target="_blank"
        className="underline underline-offset-4"
        href="mailto:hey@torso.wtf"
      >
        Email.
      </a>
    </h2>
  );
}

export default Home;
