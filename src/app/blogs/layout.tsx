import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog / @CodeTorso",
  description: "I love writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <header className="bg-black text-white">{children}</header>
  );
}
