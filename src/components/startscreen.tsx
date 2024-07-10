import React from 'react'
import { Playball} from "next/font/google";
const playball = Playball({ subsets: ["latin"], weight: ["400"] });

function Startscreen() {
  return (
    <div className="disappear absolute z-50 left-0 top-0 flex h-screen w-full items-center justify-center bg-black">
    <h1
      className={`text-effect overflow-hidden p-2 text-[18vw] md:text-[8vw] italic tracking-normal text-white ${playball.className}`}
    >
      @CodeTorso
    </h1>
  </div>
  )
}

export default Startscreen