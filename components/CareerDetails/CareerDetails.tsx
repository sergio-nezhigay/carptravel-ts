import React from "react";

import { CAREER_DATA } from "@/constants/career";

export const CareerDetails: React.FC = () => {
  const { whyUsTitle, advantages } = CAREER_DATA;
  return (
    <>
      <h4 className="mb-9 shrink-0 text-[30px] font-extralight uppercase leading-[36px] max-md:ml-[100px] md:mb-[56px] md:ml-auto md:text-right lg:mb-[45px] lg:ml-[123px] lg:text-left lg:text-[36px] lg:leading-[39px]">
        {whyUsTitle}
      </h4>
      <dl className="flex flex-col gap-4 text-right max-md:mr-[99px] md:gap-6">
        {advantages.map(({ title, description }) => (
          <div key={title} className="lg:flex lg:gap-6">
            <dt className="body-extralight font-normal max-lg:mb-2 md:whitespace-nowrap lg:grow">
              {title}
            </dt>
            <dd className="body-small lg:w-[285px] lg:text-left">
              {description}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
};
