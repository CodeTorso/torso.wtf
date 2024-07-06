import Back from "@/components/icons/back";
import SlideUpAnimation from "@/components/slideUpAnimation";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-auto flex min-h-screen max-w-6xl flex-col bg-black text-white">
      <SlideUpAnimation>
        <Link href="/blogs" className="flex items-center text-gray-300"><Back/>Back</Link>
        <div className="max-w-5xl">{children}</div>
      </SlideUpAnimation>
    </div>
  );
}
