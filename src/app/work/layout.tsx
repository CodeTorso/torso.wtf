import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work / @CodeTorso",
  description: "A collection of projects I have worked upon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="bg-amber-300 min-h-screen px-6 text-black">{children}</main>
  );
}
