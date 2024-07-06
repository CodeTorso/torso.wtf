import Back from "@/components/icons/back";
import SlideUpAnimation from "@/components/slideUpAnimation";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-auto max-w-6xl">
      <SlideUpAnimation>
        <Link href="/blogs" className="flex items-center text-gray-300 py-4">
          <Back />
          Back
        </Link>
        <div className="max-w-5xl pb-20 pt-32">{children}</div>
      </SlideUpAnimation>
    </div>
  );
}
