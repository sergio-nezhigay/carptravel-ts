import React from "react";
import Link from "next/link";
import ContactForm from "./forms/ContactForm";

const contactData = {
  phoneNumbers: [
    { number: "+38 (098) 12 34 567", label: "Mobile" },
    { number: "+38 (073) 12 34 567", label: "Office" },
  ],
  emailAddress: "support@carptravel.com",
  socialMediaLinks: [
    { href: "https://www.facebook.com/", label: "Facebook" },
    { href: "https://www.instagram.com/", label: "Instagram" },
    { href: "https://www.youtube.com/", label: "YouTube" },
    { href: "https://www.tiktok.com/", label: "TikTok" },
  ],
};

const Contacts: React.FC = () => {
  const { phoneNumbers, emailAddress, socialMediaLinks } = contactData;

  return (
    <section className="section contacts">
      <div className="container">
        <h2 className="title-thin mb-9 shrink-0">
          Contact <span className="font-medium">US</span>
        </h2>
        <address className="not-italic">
          <div className="flex gap-5">
            <ul className="">
              {phoneNumbers.map((phone, index) => (
                <li key={index}>
                  <Link href={`tel:${phone.number}`}>{phone.number}</Link>
                </li>
              ))}
            </ul>
            <p>Phone number</p>
          </div>
          <div className="flex gap-5">
            <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
            <p>E-mail</p>
          </div>
          <div className="flex gap-5">
            <p>Follow us</p>
            <ul className="">
              {socialMediaLinks.map((socialMedia, index) => (
                <li key={index}>
                  <Link href={socialMedia.href}>{socialMedia.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </address>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
