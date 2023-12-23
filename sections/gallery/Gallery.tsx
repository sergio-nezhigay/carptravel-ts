"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { Button } from "../../components/ui/button";
import { GALLERY_IMAGES } from "@/constants";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.scss";

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="section gallery">
      <div className="container lg:px-0 ">
        <h2 className="title-thin shrink-0 max-md:mb-6 md:mb-[72px] md:text-center lg:mb-6 lg:ml-[23px] lg:text-left ">
          Our <span className="font-medium">Gallery</span>
        </h2>

        <Swiper
          direction={"horizontal"}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          spaceBetween={24}
          wrapperTag="ul"
          modules={[Pagination, Navigation]}
          className="horizontal h-[294px] w-full max-md:!hidden lg:h-[429px]"
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
              <div className="overlay"></div>
            </SwiperSlide>
          ))}
          <Button className="swiper-button-next underline-on-hover p-0 focus:ring-transparent ">
            Next
          </Button>
          <Button className="swiper-button-prev underline-on-hover p-0 focus:ring-transparent ">
            Prev
          </Button>
        </Swiper>

        <Swiper
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={24}
          wrapperTag="ul"
          modules={[Pagination]}
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
      </div>
    </section>
  );
};

export default Gallery;
