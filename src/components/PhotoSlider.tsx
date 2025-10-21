import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Slide {
  src: string;
  title?: string;
  description?: string;
}

interface PhotoSliderProps {
  photos: Slide[];
  autoPlayInterval?: number;
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleLike = (index: number) => {
    setLiked((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(index)) {
        newLiked.delete(index);
      } else {
        newLiked.add(index);
      }
      return newLiked;
    });
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval, isPaused]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        className="photo-container shadow-[0_0_60px_hsl(var(--primary)/0.3)] bg-black/5"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full h-full">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={cn(
                "absolute inset-0 w-full h-full transition-all duration-700",
                idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <div className="relative w-full h-full group">
                <img
                  src={photo.src}
                  alt={photo.title || `Photo ${idx + 1}`}
                  className={cn(
                    "slider-image transition-transform duration-500",
                    isZoomed && "scale-125"
                  )}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
                <div className="photo-gradient">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  <div className="absolute left-6 bottom-6 z-20 max-w-[70%] text-left">
                    {photo.title && (
                      <div className="text-white text-lg font-semibold drop-shadow">{photo.title}</div>
                    )}
                    {photo.description && (
                      <div className="text-white/90 mt-1 text-sm drop-shadow-sm">{photo.description}</div>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2 z-20">
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="bg-white/90 hover:bg-white backdrop-blur-sm"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => toggleLike(idx)}
                      className={cn(
                        "backdrop-blur-sm transition-all",
                        liked.has(idx)
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
                          : "bg-white/90 hover:bg-white"
                      )}
                    >
                      <Heart className={cn("h-4 w-4", liked.has(idx) && "fill-current")} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
          <Button
            variant="secondary"
            size="icon"
            onClick={prevSlide}
            className="bg-white/90 hover:bg-white backdrop-blur-sm transform transition hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={nextSlide}
            className="bg-white/90 hover:bg-white backdrop-blur-sm transform transition hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Bullet Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={cn(
              "rounded-full transition-all duration-300 hover:scale-110",
              idx === currentIndex
                ? "w-12 h-3 bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.6)]"
                : "w-3 h-3 bg-muted hover:bg-muted-foreground/50"
            )}
            aria-label={`Aller à la photo ${idx + 1}`}
          />
        ))}
      </div>

      {/* Photo Counter */}
      <div className="text-center mt-4 text-muted-foreground font-medium">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PhotoSlider;
