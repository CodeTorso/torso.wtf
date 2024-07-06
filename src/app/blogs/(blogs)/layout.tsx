export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <header className="bg-black m-auto flex h-screen max-w-2xl flex-col text-white">{children}</header>
  );
}
