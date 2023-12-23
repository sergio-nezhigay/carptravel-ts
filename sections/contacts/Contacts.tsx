import React from "react";

import ContactForm from "../../components/forms/ContactForm";
import Address from "./Address";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="section contacts">
      <div className="container">
        <h2 className="title-thin mb-9 shrink-0 lg:mb-[71px] ">
          Contact <span className="font-medium">US</span>
        </h2>
        <div className="lg:flex lg:gap-5 ">
          <Address />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
