import React from "react";

import { CareerForm } from "@/components/CareerForm";
import { CareerDetails } from "@/components/CareerDetails";
import { CareerWrapper } from "@/components/CareerWrapper";
import { Title } from "@/components/Title";

import { CAREER_DATA } from "@/constants/career";

export const Career: React.FC = () => {
  const { sectionId, titlePrefix, titleSuffix, description } = CAREER_DATA;
  return (
    <section id={sectionId}>
      <CareerWrapper>
        <div className="mb-9 md:mb-[5px] md:flex md:justify-between lg:mb-6">
          <Title
            prefix={titlePrefix}
            suffix={titleSuffix}
            styles="max-md:mb-6"
          />
          <p className="body-extralight-13 max-md:ml-[100px] md:mt-[6px] md:w-[221.3px] md:text-justify lg:w-[293px]">
            {description}
          </p>
        </div>
        <div className="md:flex md:gap-5 lg:gap-6">
          <div className="max-md:mr-auto md:w-[221.3px] lg:w-1/2">
            <CareerDetails />
          </div>
          <div className="max-md:hidden md:w-[463px] md:pt-[91px] lg:w-1/2 lg:pt-0">
            <CareerForm />
          </div>
        </div>
      </CareerWrapper>
      <div className="md:hidden">
        <CareerWrapper>
          <CareerForm />
        </CareerWrapper>
      </div>
    </section>
  );
};
