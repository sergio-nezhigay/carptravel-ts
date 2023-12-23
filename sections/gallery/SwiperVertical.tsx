"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { GALLERY_IMAGES } from "@/constants/gallery";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.scss";

const SwiperVertical: React.FC = () => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={3}
      spaceBetween={24}
      wrapperTag="ul"
      className="h-[609px] md:!hidden "
    >
      {GALLERY_IMAGES.map(({ title, fileName }) => (
        <SwiperSlide key={title} tag="li" className="relative">
          <Image
            src={`/images/${fileName}`}
            alt={title}
            fill
            sizes={"100vh"}
            className=" object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperVertical;
