"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SERVICES_LIST } from "@/constants/services";

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
      <h2 className="sr-only">Our Services</h2>
      <Swiper
        ref={swiperRef}
        loop={true}
        effect="fade"
        speed={1000}
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
      >
        {SERVICES_LIST.map((service, indexCurrent) => (
          <SwiperSlide key={service.title} className="relative ">
            <div className="section ">
              <div className="container">
                <div className="md:mb-10 md:flex md:items-center md:gap-[170px] lg:mb-[23px] lg:gap-[162px]">
                  <h3 className="title-thin max-md:mb-6 ">
                    We <span className="font-medium">offer</span>
                  </h3>
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
                    <ul className=" relative flex flex-col  gap-4 lg:gap-6  ">
                      {SERVICES_LIST.map((service, index) => {
                        const isActive = indexCurrent === index;
                        return (
                          <li
                            key={service.title}
                            className="md:flex lg:justify-between"
                          >
                            <button
                              tabIndex={
                                indexCurrent === currentService ? 0 : -1
                              }
                              onClick={() => {
                                goToSlide(index);
                              }}
                              className={`${
                                isActive
                                  ? "square  pl-4 font-medium"
                                  : "text-white/50"
                              } text-left text-[20px] font-extralight uppercase leading-[17px] md:text-[22px] md:leading-[18px] lg:text-[28px] lg:leading-6`}
                            >
                              {service.title}
                            </button>
                            {isActive && (
                              <span className="absolute text-xs font-extralight tracking-[0.2em] max-md:right-0 max-md:top-[-48px] md:bottom-[-37px] md:left-0 lg:relative lg:bottom-0 lg:w-[293px] lg:text-left">
                                {service.slogan}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
