import React from "react";

import ContactForm from "../../components/forms/ContactForm";
import Address from "./Address";
import Title from "@/components/Title";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="section contacts">
      <div className="container">
        <Title prefix="Contact" suffix="us" styles="mb-9 lg:mb-[71px]" />
        <div className="lg:flex lg:gap-5 ">
          <Address />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
