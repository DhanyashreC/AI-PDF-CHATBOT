export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

      <span className="rounded-full border border-blue-600 px-4 py-2 text-sm text-blue-400">
        🚀 Powered by OpenAI + LangChain
      </span>

      <h1 className="mt-8 text-6xl font-bold leading-tight">
        Chat with your
        <span className="text-blue-500"> PDFs </span>
        using AI
      </h1>

      <p className="mt-6 max-w-2xl text-xl text-gray-400">
        Upload your PDF, ask questions, generate summaries, and instantly find
        answers with Retrieval-Augmented Generation (RAG).
      </p>

      <div className="mt-10 flex gap-4">

        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700">
          Upload PDF
        </button>

        <button className="rounded-xl border border-gray-700 px-8 py-4 hover:bg-neutral-900">
          Learn More
        </button>

      </div>

    </section>
  );
}