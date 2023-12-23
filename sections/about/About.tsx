// import { aboutConstants } from "@/Gendannet/7tXl";
import React from "react";

export const aboutConstants = {
  whoTitle: "WHO",
  weAreTitle: "WE ARE",
  subtitlePrefix: "a team of enthusiasts",

  firstParagraph: `
      who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. 
      Our goal is not just to show you the natural wonders of the mountains but to provide you with a deep immersion in their magical atmosphere.
    `,

  secondParagraph: `that nature has the power
      to inspire, strengthen character and provide new perspectives.
      Therefore, each of our tours is aimed at unlocking your potential,
      enriching your spiritual world and creating unforgettable memories.
    `,

  promotionText: `
      From vacationers
      to active travelers
    `,

  web: "We believe ",
  tourForEveryone: "we have a tour for everyone.",
  methodsText: "We use methods ",
  guideText:
    "that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains. ",
};

// import { aboutConstants } from "@/constants/about";

const About: React.FC = () => {
  return (
    <section id="about" className="about section ">
      <div className="container md:grid md:grid-cols-[auto,220px,243px] lg:grid-cols-[606px,292px,auto] lg:gap-6">
        <h1 className="title-thin max-md:mb-2 md:col-span-2 lg:col-span-1 lg:row-span-2 ">
          {aboutConstants.whoTitle}
          <span className="font-medium">{aboutConstants.weAreTitle}</span>
        </h1>
        <div className="body-extralight w-[180px] max-md:mb-10 md:row-span-2 md:w-[221.3px] lg:w-[292px]">
          <p className=" mb-5 md:mb-4 lg:mb-6">
            <span className="font-normal">{aboutConstants.subtitlePrefix}</span>
            {aboutConstants.firstParagraph}
          </p>
          <p>
            <span className="font-normal">{aboutConstants.web}</span>
            {aboutConstants.secondParagraph}
          </p>
        </div>
        <div className="body-extralight w-[182px]  max-md:mb-10 max-md:ml-auto md:col-span-2 md:w-[221.3px] md:self-end lg:col-span-1 lg:col-start-3 lg:row-start-3 lg:w-[296px]">
          <p className="font-normal uppercase">
            {aboutConstants.promotionText}
          </p>
          <p className="tracking-[-0.01em]">{aboutConstants.tourForEveryone}</p>
        </div>
        <p className="body-extralight md:col-span-2 md:col-start-2 md:pt-[64px] lg:col-span-1 lg:row-start-3 lg:pt-12">
          <span className="font-normal">{aboutConstants.methodsText}</span>
          {aboutConstants.guideText}
        </p>
      </div>
    </section>
  );
};

export default About;
