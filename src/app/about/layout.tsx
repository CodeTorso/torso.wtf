import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About / @CodeTorso",
  description: "Who the hell am I ?"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <header className="bg-lime-300">{children}</header>
  );
}
