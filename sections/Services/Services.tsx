"use client";

import React, { useRef, useState } from "react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ServicesArticle } from "@/components/ServicesArticle";

import { SERVICES_LIST, SERVICES } from "@/constants/services";

import "swiper/css";
import "swiper/css/effect-fade";

export const Services: React.FC = () => {
  const { sectionId } = SERVICES;

  const swiperRef = useRef() as any;
  const [currentService, setcurrentService] = useState(0);

  const goToSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setcurrentService(index);
    }
  };

  return (
    <section id={sectionId}>
      <Swiper
        ref={swiperRef}
        loop={true}
        effect="fade"
        wrapperTag="ul"
        speed={1000}
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
      >
        {SERVICES_LIST.map((service, indexCurrent) => (
          <SwiperSlide key={service.title} tag="li" className="relative">
            <ServicesArticle
              service={service}
              indexCurrent={indexCurrent}
              currentService={currentService}
              goToSlide={goToSlide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
