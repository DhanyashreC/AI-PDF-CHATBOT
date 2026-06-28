export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">
          AI PDF Chatbot
        </h1>

        <button className="rounded-lg border border-blue-500 px-5 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
}