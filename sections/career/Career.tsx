import React from "react";

import CareerForm from "@/components/forms/CareerForm";
import CareerWrapper from "../../components/CareerWrapper";
import Title from "@/components/Title";

import { CAREER_DATA } from "@/constants/career";

const Career: React.FC = () => {
  const {
    sectionId,
    titlePrefix,
    titleSuffix,
    description,
    whyUsTitle,
    advantages,
  } = CAREER_DATA;
  return (
    <section id={sectionId}>
      <CareerWrapper>
        <div className="mb-9 md:mb-[5px] md:flex md:justify-between lg:mb-6 ">
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

export default Career;
