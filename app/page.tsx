import About from "@/components/About";
import Gallery from "@/components/gallery/Gallery";
import Services from "@/components/Services";
import Carrer from "@/components/career/Career";
import Home from "@/components/home/Home";
import Contacts from "@/components/Contacts";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Carrer />
      <Gallery />
      <Contacts />
    </>
  );
}
