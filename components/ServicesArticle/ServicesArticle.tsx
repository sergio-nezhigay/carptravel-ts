"use client";

import React from "react";
import Image from "next/image";

import { ServicesList } from "@/components/ServicesList";
import { Title } from "@/components/Title";

import { IServicesArticle } from "@/types";

import { SERVICES_LIST, SERVICES } from "@/constants/services";

export const ServicesArticle: React.FC<IServicesArticle> = ({
  service,
  indexCurrent,
  currentService,
  goToSlide,
}) => {
  const { titlePrefix, titleSuffix } = SERVICES;
  return (
    <>
      <article>
        <div className="section">
          <div className="container">
            <div className="md:mb-10 md:flex md:items-center md:gap-[170px] lg:mb-[23px] lg:gap-[162px]">
              <Title
                prefix={titlePrefix}
                suffix={titleSuffix}
                styles="max-md:mb-6"
              />
              <div className="text-right text-[43px] font-extralight leading-[52px] max-md:mb-4 md:text-[67px] md:leading-[78px] lg:text-[98px] lg:leading-[118px]">
                {(indexCurrent + 1).toString().padStart(2, "0")}/
                <span className="font-thin text-white/20">
                  {SERVICES_LIST.length.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className="items-stretch md:flex md:h-[370px] md:gap-5 lg:h-[429px]">
              <div className="relative h-[213px] w-full max-md:mb-[60px] md:h-full md:w-[463px] md:shrink-0 lg:w-[607px]">
                <Image
                  src={`/images${service.imageSmall}`}
                  alt={service.altTextSmall}
                  fill
                  sizes={"100vh"}
                  className="object-cover "
                />
              </div>
              <div className="flex h-[320px] flex-col justify-between md:h-full lg:w-full">
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
          alt={service.altTextBG}
          className="z-[-50] object-cover"
        />
      </article>
    </>
  );
};
