import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-16 text-center text-5xl font-bold">
        Why Choose Our Chatbot?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        <FeatureCard
          icon="📄"
          title="Upload PDFs"
          description="Upload any PDF document instantly."
        />

        <FeatureCard
          icon="🤖"
          title="AI Answers"
          description="Powered by OpenAI and LangChain."
        />

        <FeatureCard
          icon="⚡"
          title="Fast Retrieval"
          description="Semantic search with vector embeddings."
        />

      </div>

    </section>
  );
}