import Link from "next/link";
import React from "react";

import Navbar from "./Navbar";
import Slogan from "./Slogan";

function Home() {
  return (
    <section className="home pb-[56px] pt-9 md:pb-[64px] md:pt-6 lg:pb-[104px] ">
      <div className="container w-full">
        <header className="mb-9 md:mb-[64px] lg:mb-12">
          <Navbar />
        </header>
        <div className="md:grid md:grid-cols-[auto,230px] lg:grid-cols-[auto,305px] ">
          <Slogan />
          <h1 className="h1-thin max-md:mb-6  md:col-start-1 md:row-span-2 md:row-start-1 ">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="w-[157px] text-[10px] font-extralight leading-4 max-md:mb-6 md:col-start-1 md:row-start-3 md:w-[267px] md:self-end md:text-[14px] md:tracking-widest lg:w-full lg:text-[16px] lg:leading-6">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
          <p className="body-extralight mb-6 text-justify md:col-start-2 md:row-start-2 md:mb-7">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <Link
            href="#"
            className="corners-border flex-center h-[52px] text-[18px] font-bold md:col-start-2 md:row-start-3 lg:h-[73px] lg:text-[32px]"
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
