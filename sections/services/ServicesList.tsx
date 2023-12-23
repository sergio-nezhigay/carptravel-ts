import React from "react";

import { SERVICES_LIST } from "@/constants/services";
import { IServicesList } from "@/types";

import "swiper/css";
import "swiper/css/effect-fade";

const ServicesList: React.FC<IServicesList> = ({
  indexCurrent,
  currentService,
  goToSlide,
}) => {
  return (
    <ul className=" relative flex flex-col  gap-4 lg:gap-6  ">
      {SERVICES_LIST.map((service, index) => {
        const isActive = indexCurrent === index;
        return (
          <li key={service.title} className="md:flex lg:justify-between">
            <button
              tabIndex={indexCurrent === currentService ? 0 : -1}
              onClick={() => {
                goToSlide(index);
              }}
              className={`${
                isActive ? "square  pl-4 font-medium" : "text-white/50"
              } text-left text-[20px] font-extralight uppercase leading-[17px] transition hover:text-white focus:outline-white md:text-[22px] md:leading-[18px] lg:text-[28px] lg:leading-6`}
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
  );
};

export default ServicesList;
