interface CarouselDotsProps {
  itemCount: number;
  activeSlide: number;
}

export const CarouselDots = ({ itemCount, activeSlide }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: itemCount }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            activeSlide === index ? "bg-coral" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};