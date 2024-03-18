export default function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center bg-black text-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-gray-50">
            Hello this is me, @codetorso! 👋
          </h1>
          <h2 className="text-2xl font-semibold text-gray-200">
            Wanna, see my projects
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-50">Projects</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-gray-200 underline decoration-gray-200"
            href="https://www.inspiring.lol"
          >
            Inspiring.lol
          </a>
        </div>
      </div>
    </div>
  );
}
