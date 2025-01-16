import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/lovable-uploads/644fa23f-ba2e-44e0-a963-72111efc0fc8.png",
  "/lovable-uploads/5eb45972-930d-4d4b-b75a-d57a9ac250a5.png",
  "/lovable-uploads/e94dde7e-99a5-45c7-a1c3-204cff12c0fd.png",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const ImageCarousel = () => {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Successful Content Creators on Xiaohongshu</h2>
      <div className="max-w-4xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;