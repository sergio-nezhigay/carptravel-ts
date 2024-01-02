import React from "react";

import { HOME } from "@/constants/home";

export const Slogan: React.FC = () => {
  const { part1, part2, part3 } = HOME.slogan;
  return (
    <div className="w-[118px] uppercase max-md:mb-6 max-md:ml-auto md:mb-[56px] md:h-[88px] md:w-[230px] lg:mb-[181px] lg:h-[123px] lg:w-[305px]">
      <p className="flex text-[37px] leading-[37px] md:text-[67px] md:leading-[67px] lg:text-[98px] lg:leading-[98px]">
        <span className="font-medium xl:mr-[8px]">{part1}</span>
        <span className="font-thin tracking-wider md:tracking-[0.13em] xl:tracking-normal">
          {part2}
        </span>
      </p>
      <p className="text-xs font-light leading-[14.5px] tracking-[0.79em] md:text-sm md:leading-[16.9px] md:tracking-[26px] xl:ml-0 xl:text-[16px] xl:leading-[19.4px] xl:tracking-[37px]">
        {part3}
      </p>
    </div>
  );
};
