import { type Blogs } from "@/lib/getPosts";
import Link from "next/link";

export function Blogs({ blogs }: { blogs: Blogs[] }) {
  return (
    <ol className="py-32">
      {blogs.map(({ slug, title, publishDate, readingTime, description }) => (
        <li key={slug} className="flex flex-col gap-2">
          <h2 className="underline-offset-2 underline">
            <Link href={`/blogs/${slug}`}>{title} {readingTime}</Link>
          </h2>
          <h3 className="text-gray-200">
            {description}
          </h3>
          <p className="text-gray-200">
            {publishDate} • {readingTime}
          </p>
        </li>
      ))}
    </ol>
  );
}
