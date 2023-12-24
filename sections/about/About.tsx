import React from "react";

import { ABOUT_DATA } from "@/constants/about";
import Title from "@/components/Title";

const About: React.FC = () => {
  return (
    <section id="about" className="about section ">
      <div className="container md:grid md:grid-cols-[auto,220px,243px] lg:grid-cols-[606px,292px,auto] lg:gap-6">
        <Title
          prefix={ABOUT_DATA.titlePrefix}
          suffix={ABOUT_DATA.titleSuffix}
          styles="max-md:mb-2 md:col-span-2 lg:col-span-1 lg:row-span-2 "
        />
        <div className="body-extralight w-[180px] max-md:mb-10 md:row-span-2 md:w-[221.3px] lg:w-[292px]">
          <p className=" mb-5 md:mb-4 lg:mb-6">
            <span className="font-normal">{ABOUT_DATA.subtitlePrefix}</span>
            {ABOUT_DATA.firstParagraph}
          </p>
          <p>
            <span className="font-normal">{ABOUT_DATA.web}</span>
            {ABOUT_DATA.secondParagraph}
          </p>
        </div>
        <div className="body-extralight w-[182px]  max-md:mb-10 max-md:ml-auto md:col-span-2 md:w-[221.3px] md:self-end lg:col-span-1 lg:col-start-3 lg:row-start-3 lg:w-[296px]">
          <p className="font-normal uppercase">{ABOUT_DATA.promotionText}</p>
          <p className="tracking-[-0.01em]">{ABOUT_DATA.tourForEveryone}</p>
        </div>
        <p className="body-extralight md:col-span-2 md:col-start-2 md:pt-[64px] lg:col-span-1 lg:row-start-3 lg:pt-12">
          <span className="font-normal">{ABOUT_DATA.methodsText}</span>
          {ABOUT_DATA.guideText}
        </p>
      </div>
    </section>
  );
};

export default About;
