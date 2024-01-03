import React from "react";

import { Title } from "@/components/Title";
import { Address } from "@/components/Address";
import { ContactForm } from "@/components/ContactForm";

import { CONTACT_DATA } from "@/constants/contacts";

export const Contacts: React.FC = () => {
  const { titlePrefix, titleSuffix, sectionId } = CONTACT_DATA;
  return (
    <section id={sectionId} className="section contacts">
      <div className="container">
        <Title
          prefix={titlePrefix}
          suffix={titleSuffix}
          styles="mb-9 lg:mb-[71px]"
        />
        <div className="lg:flex lg:gap-5">
          <Address />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
