import React from "react";

import Navbar from "@/components/Navbar";
import Home from "@/sections/home/Home";
import About from "@/sections/about/About";
import Services from "@/sections/services/Services";
import Carrer from "@/sections/career/Career";
import Gallery from "@/sections/gallery/Gallery";
import Contacts from "@/sections/contacts/Contacts";

const Page: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
        <Services />
        <Carrer />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
};

export default Page;
