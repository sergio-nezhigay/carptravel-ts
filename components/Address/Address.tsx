import React from "react";
import Link from "next/link";

import { CONTACT_DATA } from "@/constants/contacts";

export const Address: React.FC = () => {
  const { phoneNumbers, emailAddress, socialMediaLinks } = CONTACT_DATA;
  return (
    <address className="mb-3 grid grid-cols-[1fr,auto] gap-x-5 gap-y-6 not-italic md:mb-[64px] md:grid-cols-[221.3px,auto,auto,221.3px] lg:mb-0 lg:w-1/2 lg:grid-cols-[293px,auto] lg:grid-rows-[3fr,148px,auto] ">
      <ul>
        {phoneNumbers.data.map((phone, index) => (
          <li key={index} className="text-right">
            <Link
              href={`tel:${phone.number.replace(/\s/g, "")}`}
              className="body-extralight underline-on-hover leading-6 focus:outline-white"
            >
              {phone.number}
            </Link>
          </li>
        ))}
      </ul>
      <p className=" body-small ">{phoneNumbers.label}</p>
      <p className="text-right">
        <Link
          href={`mailto:${emailAddress.data}`}
          className="underline-on-hover body-extralight leading-6 focus:outline-white md:col-start-1"
        >
          {emailAddress.data}
        </Link>
      </p>

      <p className="body-small md:col-start-2">{emailAddress.label}</p>
      <p className="body-small text-right md:col-start-3 md:row-start-1 lg:col-start-2 lg:row-start-3 lg:text-left">
        {socialMediaLinks.label}
      </p>

      <ul className="md:col-start-4 md:row-span-2 md:row-start-1 lg:col-start-1 lg:row-span-1 lg:row-start-3 lg:text-right">
        {socialMediaLinks.data.map((socialMedia, index) => (
          <li key={index}>
            <Link
              href={socialMedia.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="body-extralight underline-on-hover lowercase leading-6 focus:outline-white"
            >
              {socialMedia.label}
            </Link>
          </li>
        ))}
      </ul>
    </address>
  );
};
