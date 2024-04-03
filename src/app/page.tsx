import Landing from "~/components/Landing";
import Navbar from "~/components/Navbar";
import Projects from "~/components/Projects";
import About from "~/components/about";

export default function HomePage() {
  return (
<div className="w-full h-[200vw] bg-black">
  <Navbar />
  <Landing />
  <About />
  <Projects />

</div>
  );
}
