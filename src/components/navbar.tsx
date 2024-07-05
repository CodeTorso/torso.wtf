import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex w-full justify-between py-4 gap-8">
      <Link href="/">
        <h1>@CodeTorso</h1>
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
        <Link href="/socials" className="group/link h-6 overflow-hidden">
          <div className="transition-all group-hover/link:-translate-y-full">
            Socials
          </div>
          <div className="underline-offset-4 transition-all hover:underline group-hover/link:-translate-y-full">
            Socials
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
