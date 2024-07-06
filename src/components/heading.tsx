import { type ComponentPropsWithoutRef } from 'react';

export function Heading(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1  className="text-7xl text-gray-300 font-extrabold py-10" {...props} />;
}

export function Paragraph(props: ComponentPropsWithoutRef<'p'>) {
  return <h1  className="text-lg font-medium py-2 leading-8 tracking-wide" {...props} />;
}
