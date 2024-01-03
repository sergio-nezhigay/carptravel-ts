"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { Slogan } from "@/components/Slogan";

import { HOME } from "@/constants/home";

export const Home: React.FC = () => {
  const {
    joinNowButton,
    descriptionContent,
    descriptionText,
    title,
    titleStressed,
  } = HOME;

  return (
    <section className="home pb-[56px] pt-[105px] md:pb-[64px] md:pt-[121px] lg:pb-[104px] lg:pt-[130px]">
      <div className="container w-full">
        <div className="md:grid md:grid-cols-[auto,230px] lg:grid-cols-[auto,305px]">
          <Slogan />
          <h1 className="title-thin max-md:mb-6 md:col-start-1 md:row-span-2 md:row-start-1">
            <span className="font-medium">{titleStressed}</span>
            {title}
          </h1>
          <p className="w-[157px] text-[10px] font-extralight leading-4 max-md:mb-6 md:col-start-1 md:row-start-3 md:w-[267px] md:self-end md:text-[14px] md:tracking-widest lg:w-full lg:text-[16px] lg:leading-6">
            {descriptionText}
          </p>
          <div className="md:col-start-2 md:row-span-2 md:row-start-2 lg:pl-3">
            <p className="body-extralight mb-6 text-justify md:mb-7">
              {descriptionContent}
            </p>
            <ScrollLink
              href="#contacts"
              to="contacts"
              smooth={true}
              duration={500}
              className="corners-border flex-center h-[52px] text-[18px] font-bold focus:outline-white lg:h-[71px] lg:text-[32px]"
            >
              {joinNowButton}
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};
