import { useState, useCallback } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export const useCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveSlide(api.selectedScrollSnap());
  }, [api]);

  return {
    api,
    setApi,
    activeSlide,
    onSelect,
  };
};