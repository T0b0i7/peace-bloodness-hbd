import { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const Balloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  const colors = [
    'hsl(var(--celebration-pink))',
    'hsl(var(--celebration-purple))',
    'hsl(var(--celebration-gold))',
    'hsl(var(--celebration-rose))',
  ];

  useEffect(() => {
    const pieces: Balloon[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 40 + Math.random() * 30,
    }));
    setBalloons(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-balloon-float"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
          }}
        >
          {/* Balloon body */}
          <div
            className="relative w-full h-full rounded-[50%] opacity-70"
            style={{
              backgroundColor: balloon.color,
              boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.1), 0 0 20px ${balloon.color}40`,
            }}
          >
            {/* Balloon shine */}
            <div
              className="absolute top-[20%] left-[30%] w-[30%] h-[30%] bg-white/40 rounded-full blur-sm"
            />
          </div>
          {/* Balloon string */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-20 opacity-50"
            style={{ backgroundColor: balloon.color }}
          />
        </div>
      ))}
    </div>
  );
};

export default Balloons;
