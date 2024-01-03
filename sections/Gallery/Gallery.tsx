import React from "react";

import { SwiperHorizontal } from "@/components/SwiperHorizontal";
import { SwiperVertical } from "@/components/SwiperVertical";
import { Title } from "@/components/Title";

import { GALLERY } from "@/constants/gallery";

export const Gallery: React.FC = () => {
  const { sectionId, titlePrefix, titleSuffix } = GALLERY;

  return (
    <section id={sectionId} className="section gallery">
      <div className="container lg:px-0">
        <Title
          prefix={titlePrefix}
          suffix={titleSuffix}
          styles="max-md:mb-6 md:mb-[72px] md:text-center lg:mb-6 lg:ml-[23px] lg:text-left"
        />
        <SwiperHorizontal />
        <SwiperVertical />
      </div>
    </section>
  );
};
