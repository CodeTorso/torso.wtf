
import { Poppins } from "next/font/google";
import { MotionDiv } from "./motiondiv";
import { FaArrowUpLong } from "react-icons/fa6";
import styles from "./Landing.module.css"
import Image from "next/image";

const rowdies = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "700"
  });

function Landing() {
  return (
    <main className="text-white px-[5vw] pt-[26vh]">
        <h1 className={`uppercase text-[8vw] tracking-[-.3vw] leading-[7vw] ${rowdies.className}`}>hello there</h1>
        <div className="flex items-center">
        <MotionDiv initial={{width: 0}} animate={{width: "10.5vw"} } transition={{ease: [0.34, 1.56, 0.64, 1], duration: 1, delay: .5}}   className=" overflow-hidden rounded-sm h-[6.4vw]">
          <Image alt="pearl girl"  className="h-[6.4vw]" src="/girl.png" ></Image>
        </MotionDiv>
        <h1 className={`uppercase text-[8vw] tracking-[-.3vw] leading-[7vw] ${rowdies.className}`}>I am</h1>
        </div>
        <h1 className={`uppercase text-[8vw] ${styles["colored-text"]} bg-clip-text text-transparent  tracking-[-.3vw] leading-[7vw] ${rowdies.className}`}>@codetorso</h1>

        <div className="w-full select-none mt-32 group/teen border-t-[1px] border-gray-800 relative">
          <div className=" bg-black absolute -top-100% -translate-y-1/2 flex items-center right-0">
          <h1>Scroll down</h1>
          <div className="rotate-[180deg] relative fill-white group-hover/teen:fill-black  border-2 border-gray-600 group-hover/teen:border-white p-4 ml-2 rounded-full overflow-hidden duration-300"><div className="h-20 w-20 rounded-full group-hover/teen:scale-100 bg-white scale-0 transition-all duration-500 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute -z-10"></div><FaArrowUpLong fill="inherit" /></div>
          </div>

        </div>
    </main>
  )
}

export default Landing