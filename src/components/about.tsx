"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function About() {
const words = `Hello! I love building things, and here's a collection of them for you to see, they are all built by me for the fellow people to see, I suck at rhyming things. Anyways, they are all open-source,you can check them out, I also love talking to people, so maybe, if you got the time DM me on twitter, would love to share some words.`;
  return (
    <div className="w-full px-5vw">
      <div className="pt-[20vw] px-[5vw] lg:w-[80vw]"><TextGenerateEffect words={words} /></div>
    </div>
  )
}

export default About