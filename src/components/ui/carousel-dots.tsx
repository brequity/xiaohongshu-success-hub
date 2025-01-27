interface CarouselDotsProps {
  itemCount: number;
  activeSlide: number;
  onDotClick?: (index: number) => void;
}

export const CarouselDots = ({ itemCount, activeSlide, onDotClick }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: itemCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick?.(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeSlide === index 
              ? "bg-coral w-4" 
              : "bg-gray-300 hover:bg-coral/50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};