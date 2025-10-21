import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const pieces: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
    setSparkles(pieces);
  }, []);

  // generate CSS rules for each sparkle so we don't use inline styles on elements
  const sparkleRules = sparkles
    .map(
      (s) =>
        `.sparkle-${s.id} { left: ${s.x}%; top: ${s.y}%; animation-delay: ${s.delay}s; width: ${s.size *
          4}px; height: ${s.size * 4}px; }`
    )
    .join('\n');

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <style>{`.sparkle { position: absolute; } .animate-sparkle { /* keep existing animation class usage */ } ${sparkleRules}`}</style>

      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={`absolute animate-sparkle sparkle-${sparkle.id}`}
        >
          <svg
            width={sparkle.size * 4}
            height={sparkle.size * 4}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              fill="currentColor"
              className="text-accent"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
