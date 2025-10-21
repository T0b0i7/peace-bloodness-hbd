import { memo, useCallback, useEffect, useState } from 'react';
import '@/styles/confetti.css';

type ColorIndex = 0 | 1 | 2 | 3;
type Size = 4 | 6 | 8 | 10 | 12;
type Delay = 0 | 1 | 2 | 3;
type Duration = 3 | 4 | 5;

interface ConfettiPiece {
  id: number;
  leftPosition: number;
  delay: Delay;
  duration: Duration;
  colorIndex: ColorIndex;
  size: Size;
  isCircle: boolean;
}

const SIZES = [4, 6, 8, 10, 12] as const;
const DELAYS = [0, 1, 2, 3] as const;
const DURATIONS = [3, 4, 5] as const;
const COLOR_INDICES = [0, 1, 2, 3] as const;

const getRandomFromArray = <T extends readonly unknown[]>(array: T): T[number] => {
  return array[Math.floor(Math.random() * array.length)];
};

const roundToNearest = (value: number): number => {
  return Math.round(value / 5) * 5;
};

const ConfettiPiece = memo(({ piece }: { piece: ConfettiPiece }) => {
  const classes = [
    'confetti-piece',
    `confetti-color-${piece.colorIndex}`,
    piece.isCircle ? 'circle' : 'square',
    `confetti-left-${piece.leftPosition}`,
    `confetti-size-${piece.size}`,
    `delay-${piece.delay}`,
    `duration-${piece.duration}`,
  ].join(' ');

  return <div className={classes} />;
});

ConfettiPiece.displayName = 'ConfettiPiece';

const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const generatePieces = useCallback(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      leftPosition: roundToNearest(Math.random() * 100),
      delay: getRandomFromArray(DELAYS),
      duration: getRandomFromArray(DURATIONS),
      colorIndex: getRandomFromArray(COLOR_INDICES),
      size: getRandomFromArray(SIZES),
      isCircle: Math.random() > 0.5,
    }));
  }, []);

  useEffect(() => {
    setConfetti(generatePieces());
  }, [generatePieces]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <ConfettiPiece key={piece.id} piece={piece} />
      ))}
    </div>
  );
};

export default Confetti;
