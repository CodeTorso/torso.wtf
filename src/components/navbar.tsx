import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="text-xl flex w-full justify-end md:justify-between gap-4 md:gap-8 py-4">
      <Link href="/">
        <h1 className="hidden md:block">@CodeTorso/Home</h1><h1 className="block md:hidden">Home</h1>
      </Link>
      <div className="flex gap-4">
        <Link href="/work" className="group/link h-6 overflow-hidden">
          <div className="transition-all group-hover/link:-translate-y-full">
            Work
          </div>
          <div className="underline-offset-4 transition-all hover:underline group-hover/link:-translate-y-full">
            Work
          </div>
        </Link>
        <Link href="/about" className="group/link h-6 overflow-hidden">
          <div className="transition-all group-hover/link:-translate-y-full">
            About
          </div>
          <div className="underline-offset-4 transition-all hover:underline group-hover/link:-translate-y-full">
            About
          </div>
        </Link>
        <Link href="/blogs" className="group/link h-6 overflow-hidden">
          <div className="transition-all group-hover/link:-translate-y-full">
            Blogs
          </div>
          <div className="underline-offset-4 transition-all hover:underline group-hover/link:-translate-y-full">
            Blogs
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
