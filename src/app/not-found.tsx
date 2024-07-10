import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center text-center text-[4vw] font-normal text-white">
      <div className="space-y-8">
        <Navbar />
        <div>
          <h2>Hmm... This does not exist</h2>
          <h2>Error 404</h2>
        </div>
      </div>
    </div>
  );
}
