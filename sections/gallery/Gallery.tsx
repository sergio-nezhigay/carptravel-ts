import React from "react";

import SwiperHorizontal from "./SwiperHorizontal";
import SwiperVertical from "./SwiperVertical";
import Title from "@/components/Title";

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="section gallery">
      <div className="container lg:px-0 ">
        <Title
          prefix="Our "
          suffix="Gallery"
          styles="max-md:mb-6 md:mb-[72px] md:text-center lg:mb-6 lg:ml-[23px] lg:text-left"
        />
        <SwiperHorizontal />
        <SwiperVertical />
      </div>
    </section>
  );
};

export default Gallery;
