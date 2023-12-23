import React from "react";

import SwiperHorizontal from "./SwiperHorizontal";
import SwiperVertical from "./SwiperVertical";

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="section gallery">
      <div className="container lg:px-0 ">
        <h2 className="title-thin shrink-0 max-md:mb-6 md:mb-[72px] md:text-center lg:mb-6 lg:ml-[23px] lg:text-left ">
          Our <span className="font-medium">Gallery</span>
        </h2>
        <SwiperHorizontal />
        <SwiperVertical />
      </div>
    </section>
  );
};

export default Gallery;
