interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition hover:border-blue-500 hover:scale-105">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>
    </div>
  );
}