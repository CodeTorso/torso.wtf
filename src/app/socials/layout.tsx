import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials / @CodeTorso",
  description: "My social presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <header className="bg-red-900">{children}</header>
  );
}
