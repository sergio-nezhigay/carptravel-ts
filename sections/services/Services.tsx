"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SERVICES_LIST } from "@/constants/services";
import ServicesList from "./ServicesList";
import Title from "@/components/Title";

import "swiper/css";
import "swiper/css/effect-fade";

const Services: React.FC = () => {
  const swiperRef = useRef() as any;
  const [currentService, setcurrentService] = useState(0);

  const goToSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setcurrentService(index);
    }
  };

  return (
    <section id="services">
      <Title prefix="Our" suffix="Services" styles="sr-only" />
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
          <SwiperSlide key={service.title} tag="li" className="relative ">
            <article>
              <div className="section ">
                <div className="container">
                  <div className="md:mb-10 md:flex md:items-center md:gap-[170px] lg:mb-[23px] lg:gap-[162px]">
                    <Title prefix="We" suffix="offer" styles="max-md:mb-6" />
                    <div className="text-right text-[43px] font-extralight  leading-[52px] max-md:mb-4 md:text-[67px] md:leading-[78px] lg:text-[98px] lg:leading-[118px]">
                      {(indexCurrent + 1).toString().padStart(2, "0")}/
                      <span className="font-thin text-white/20">
                        {SERVICES_LIST.length.toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="items-stretch md:flex  md:h-[370px] md:gap-5 lg:h-[429px]">
                    <div className="relative h-[213px] w-full max-md:mb-[60px] md:h-full md:w-[463px] md:shrink-0  lg:w-[607px]">
                      <Image
                        src={`/images${service.imageSmall}`}
                        alt={service.slogan}
                        fill
                        sizes={"100vh"}
                        className="object-cover "
                      />
                    </div>
                    <div className="flex h-[320px] flex-col justify-between  md:h-full lg:w-full ">
                      <ServicesList
                        indexCurrent={indexCurrent}
                        currentService={currentService}
                        goToSlide={goToSlide}
                      />

                      <p className="body-extralight-13 md:text-justify lg:ml-auto lg:w-[293px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={`/images${service.imageBG}`}
                fill
                sizes={"100vh"}
                alt={service.title}
                className="z-[-50] object-cover "
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
