import type { MDXComponents } from 'mdx/types';
import { Blockquote,  Heading, Paragraph, Link  } from '@/components/heading';


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
    p: Paragraph,
    // code: Code
    a: Link,
    // Link,
    blockquote: Blockquote,
    ...components,
  };
}
