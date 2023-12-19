"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import SwiperCore, { Pagination, Navigation } from "swiper/modules";
import { galleryImages } from "@/constants";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "swiper/css/navigation";

import "./styles.scss";
// import "./styles.css";
import Image from "next/image";
import { Button } from "../ui/button";
// SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Gallery: React.FC = () => {
  return (
    <section className="section gallery">
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
          className="horizontal h-[294px] w-full max-md:hidden lg:h-[429px]"
        >
          {galleryImages.map(({ title, fileName }) => (
            <SwiperSlide key={title} tag="li" className="relative">
              <Image
                src={`/images/${fileName}`}
                alt={title}
                fill
                className=" object-cover"
              />
              <div className="overlay"></div>
            </SwiperSlide>
          ))}
          <Button className="swiper-button-next underline-on-hover p-0">
            Next
          </Button>
          <Button className="swiper-button-prev underline-on-hover p-0">
            Prev
          </Button>
        </Swiper>

        {/* <Swiper
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={24}
          wrapperTag="ul"
          modules={[Pagination]}
          className="h-[609px] md:hidden "
        >
          {galleryImages.map(({ title, fileName }) => (
            <SwiperSlide key={title} tag="li" className="relative">
              <Image
                src={`/images/${fileName}`}
                alt={title}
                fill
                className=" object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
};

export default Gallery;
