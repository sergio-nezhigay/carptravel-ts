import React from "react";

function About() {
  return (
    <section className="about section ">
      <div className="container md:grid md:grid-cols-[auto,220px,243px] lg:grid-cols-[606px,292px,auto] lg:gap-6">
        <h1 className="title-thin max-md:mb-2 md:col-span-2 lg:col-span-1 lg:row-span-2 ">
          WHO
          <span className="font-medium"> WE ARE</span>
        </h1>
        <div className="body-extralight w-[180px] max-md:mb-10 md:row-span-2 md:w-[221px] lg:w-[292px]">
          <p className=" mb-5 md:mb-4 lg:mb-6">
            <span className="font-normal">a team of enthusiasts </span>who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p>
            <span className="font-normal">We believe </span>that nature has the
            power to inspire, strengthen character and provide new perspectives.
            Therefore, each of our tours is aimed at unlocking your potential,
            enriching your spiritual world and creating unforgettable memories.
          </p>
        </div>
        <div className="body-extralight w-[182px] leading-5 max-md:mb-10 max-md:ml-auto md:col-span-2 md:w-[221px] md:self-end lg:col-span-1 lg:col-start-3 lg:row-start-3 lg:w-[296px]">
          <p className="font-normal uppercase">
            From vacationers
            <span className="ml-auto block w-fit"> to active travelers</span>
          </p>
          <p className="tracking-[-0.01em]">we have a tour for everyone.</p>
        </div>
        <p className="body-extralight md:col-span-2 md:col-start-2 md:pt-[64px] lg:col-span-1 lg:row-start-3 lg:pt-12">
          <span className="font-normal">We use methods </span>that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </section>
  );
}

export default About;
