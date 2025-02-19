"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import slider1 from "@/public/slider-1.jpg";
import slider2 from "@/public/slider-2.jpg";
import slider3 from "@/public/slider-3.jpg";
import Autoplay from "embla-carousel-autoplay";

const CarouselHome: React.FC = () => {
  const carousels = [slider1, slider2, slider3];

  return (
    <Carousel
      className="relative w-full overflow-hidden h-[395px] pt-[80px]"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent>
        {carousels.map((item, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full">
            <Image
              src={item}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouselHome;
