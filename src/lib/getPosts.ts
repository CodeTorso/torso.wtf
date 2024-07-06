import { readdir } from "fs/promises";
import { Category } from "./categories";

export interface Blogs {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readingTime: string;
}

export async function getBlogs(): Promise<Blogs[]> {
  const slugs = (
    await readdir('./src/app/blogs/(blogs)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const blogs = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../app/blogs/(blogs)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  blogs.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return blogs;
}
