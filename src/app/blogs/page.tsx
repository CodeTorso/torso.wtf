import React from "react";
import Navbar from "@/components/navbar";
import { Blogs } from "@/components/blogs";
import { getBlogs } from "@/lib/getPosts";
import LoaderAnimation from "@/components/loaderAnimation";
import SlideUpAnimation from "@/components/slideUpAnimation";
async function page() {
  const posts = await getBlogs();
  return (
    <>
      <main className="m-auto flex max-w-2xl flex-col">
        <SlideUpAnimation>
          <Navbar />
          <Blogs blogs={posts} />
        </SlideUpAnimation>
      </main>
    </>
  );
}

export default page;
