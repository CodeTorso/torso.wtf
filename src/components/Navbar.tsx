import { Poppins } from "next/font/google"
import styles from "./Navbar.module.css"

const roboto = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "400"
});

const darkRoboto = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "700"
});

function Navbar() {
  return (
<nav className={`${roboto.className} select-none text-white w-full flex justify-center`}>

    <div className="w-11/12 pt-6 h-12 relative flex justify-end items-end">

      <div className={`${darkRoboto.className} absolute left-0 top-full -translate-y-full`}>
        <h2 className="text-3xl font-black">torso.wtf</h2>
      </div>


      <input className={`${styles.checkbox} md:hidden absolute right-0 top-full -translate-y-[150%] opacity-0 cursor-pointer z-10`} type="checkbox" />

      <div className={`${styles["hamburger-lines"]}`}>
        <span className={`${styles.line} ${styles.line1} md:hidden`}></span>
        <span className={`${styles.line} ${styles.line2} md:hidden`}></span>
        <span className={`${styles.line} ${styles.line3} md:hidden`}></span>
      </div>


      <div className={`${styles["link-container"]} flex flex-col md:flex-row justify-center text-center gap-8 sm:text-xl`}>
        
        <div className={`${styles["hover-animation"]} md:mx-2 md:h-[2.4rem] md:overflow-hidden group/1`}>
        <h2 className="md:py-[.35rem] md:group-hover/1:-translate-y-full transition-all ease-[cubic-bezier(.215,.61,.355,1)] duration-500"><a href="#">about</a></h2>
        <h2 className="hidden md:block py-[.35rem] group-hover/1:-translate-y-full transition-all ease-[cubic-bezier(.215,.61,.355,1)] duration-500"><a href="#">about</a></h2>
        </div>

        <div className={`${styles["hover-animation"]} md:mx-2  md:h-[2.4rem] md:overflow-hidden group/2`}>
        <h2 className="md:py-[.35rem] md:group-hover/2:-translate-y-full ease-[cubic-bezier(.215,.61,.355,1)] duration-500"><a href="#">Twitter</a></h2>
        <h2 className="hidden md:block py-[.35rem] group-hover/2:-translate-y-full transition-all ease-[cubic-bezier(.215,.61,.355,1)] duration-500"><a href="#">Twitter</a></h2>
        </div>

        <div className={`${styles["hover-animation"]} md:mx-2 md:h-[2.4rem] md:overflow-hidden group/3`}>
        <h2 className="md:py-[.35rem] md:group-hover/3:-translate-y-full transition-all ease-[cubic-bezier(.215,.61,.355,1)] duration-500"><a href="#">Projects</a></h2>
        <h2 className="hidden md:block py-[.35rem] group-hover/3:-translate-y-full transition-all ease-[cubic-bezier(.215,.61,.355,1)] duration-500"><a href="#">Projects</a></h2>
        </div>

        <div className={`${styles["hover-animation"]} md:mx-2 md:h-[2.4rem] md:overflow-hidden group/4`}>
        <h2 className="md:py-[.35rem] md:group-hover/4:-translate-y-full transition-all ease-[cubic-bezier(.215,.61,.355,1)] duration-500"><a href="#">Contact</a></h2>
        <h2 className="hidden md:block py-[.35rem] group-hover/4:-translate-y-full transition-all ease-[cubic-bezier(.215,.61,.355,1)] duration-500"><a href="#">Contact</a></h2>
        </div>

      </div>
    </div>
  </nav>
  )
}

export default Navbar