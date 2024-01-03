"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Button } from "@/components/ui/button";

import { GALLERY_IMAGES } from "@/constants/gallery";

import "swiper/css";
import "swiper/css/navigation";
import "./swiper.scss";

export const SwiperHorizontal: React.FC = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop
      spaceBetween={24}
      speed={800}
      wrapperTag="ul"
      modules={[Navigation]}
      className="horizontal h-[294px] w-full max-md:!hidden lg:h-[429px]"
    >
      {GALLERY_IMAGES.map(({ title, fileName, alt }) => (
        <SwiperSlide key={title} tag="li" className="overlay relative">
          <Image
            src={`/images/${fileName}`}
            alt={alt}
            fill
            sizes={"100vh"}
            className="object-cover"
          />
        </SwiperSlide>
      ))}
      <Button
        type="button"
        className="swiper-button-prev underline-on-hover p-0 focus:ring-transparent"
      >
        Prev
      </Button>
      <Button
        type="button"
        className="swiper-button-next underline-on-hover overflow-visible p-0 outline-offset-1 ring-offset-4 focus:ring-transparent"
      >
        Next
      </Button>
    </Swiper>
  );
};
