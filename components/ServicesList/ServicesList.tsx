import React from "react";

import { IServicesList } from "@/types";

import { SERVICES_LIST } from "@/constants/services";

import "swiper/css";
import "swiper/css/effect-fade";

export const ServicesList: React.FC<IServicesList> = ({
  indexCurrent,
  currentService,
  goToSlide,
}) => {
  return (
    <ul className="relative flex flex-col gap-4 lg:gap-6">
      {SERVICES_LIST.map((service, index) => {
        const isActive = indexCurrent === index;
        const longButtonClass =
          service.title.length > 15 ? "text-left w-min" : "";
        return (
          <li key={service.title} className="h-fit md:flex lg:justify-between">
            <button
              type="button"
              tabIndex={indexCurrent === currentService ? 0 : -1}
              onClick={() => {
                goToSlide(index);
              }}
              className={`${
                isActive ? "square pl-4 font-medium" : "text-white/50"
              } ${longButtonClass} text-[20px] font-extralight uppercase leading-[17px] transition hover:translate-x-2 hover:text-white focus:outline-white md:text-[22px] md:leading-[18px] lg:text-[28px] lg:leading-7`}
            >
              {service.title}
            </button>
            {isActive && (
              <span className=" absolute text-xs font-extralight tracking-[0.2em] max-md:right-0 max-md:top-[-48px] md:bottom-[-37px] md:left-0 lg:relative lg:bottom-0 lg:w-[293px] lg:text-left">
                {service.slogan}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
