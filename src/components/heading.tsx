import { type ComponentPropsWithoutRef } from 'react';

export function Heading(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1 className="underline underline-offset-2" {...props} />;
}
