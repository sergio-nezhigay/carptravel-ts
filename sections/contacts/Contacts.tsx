import React from "react";
import Link from "next/link";

import ContactForm from "../../components/forms/ContactForm";
import { CONTACT_DATA } from "@/constants";

const Contacts: React.FC = () => {
  const { phoneNumbers, emailAddress, socialMediaLinks } = CONTACT_DATA;

  return (
    <section id="contacts" className="section contacts">
      <div className="container">
        <h2 className="title-thin mb-9 shrink-0 lg:mb-[71px] ">
          Contact <span className="font-medium">US</span>
        </h2>
        <div className="lg:flex lg:gap-5 ">
          <address className="mb-3 grid grid-cols-[1fr,auto] gap-x-5 gap-y-6 not-italic md:mb-[64px] md:grid-cols-[221.3px,auto,auto,221.3px] lg:mb-0 lg:w-1/2 lg:grid-cols-[293px,auto] lg:grid-rows-[3fr,148px,auto] ">
            <dd>
              <ul className="">
                {phoneNumbers.map((phone, index) => (
                  <li key={index} className="text-right">
                    <Link
                      href={`tel:${phone.number}`}
                      className="body-extralight underline-on-hover leading-6"
                    >
                      {phone.number}
                    </Link>
                  </li>
                ))}
              </ul>
            </dd>
            <dt className=" body-small ">Phone number</dt>
            <dd className="body-extralight text-right leading-6 md:col-start-1">
              <Link
                href={`mailto:${emailAddress}`}
                className="underline-on-hover"
              >
                {emailAddress}
              </Link>
            </dd>
            <dt className="body-small md:col-start-2">E-mail</dt>
            <dt className="body-small text-right md:col-start-3 md:row-start-1 lg:col-start-2 lg:row-start-3 lg:text-left">
              Follow us
            </dt>
            <dd className="md:col-start-4 md:row-span-2 md:row-start-1 lg:col-start-1 lg:row-span-1 lg:row-start-3 lg:text-right">
              <ul className="">
                {socialMediaLinks.map((socialMedia, index) => (
                  <li key={index}>
                    <Link
                      href={socialMedia.href}
                      className="body-extralight underline-on-hover lowercase leading-6"
                    >
                      {socialMedia.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </dd>
          </address>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
