import React from "react";

// import { Navbar } from "@/components/Navbar";
// import { About } from "@/sections/About";
// import { Contacts } from "@/sections/Contacts";
// import { Gallery } from "@/sections/Gallery";
// import { Services } from "@/sections/Services";
import { Home } from "../sections/Home";
// import { Home } from "@sections/Home";
// import { Career } from "@sections/Career";

const Page: React.FC = () => {
  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <main>
        <Home />
        {/* <About />
        <Services />
        <Career />
        <Gallery />
        <Contacts /> */}
      </main>
    </>
  );
};

export default Page;
