import { IFormConfig } from "@/types";

export const CONTACT_DATA = {
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

export const CONTACT_FORM_CONFIG: IFormConfig = {
  inputs: [
    {
      name: "username",
      placeholder: "John Smith",
      type: "text",
      label: "Full name",
    },
    {
      name: "email",
      placeholder: "johnsmith@email.com",
      type: "text",
      label: "E-mail",
    },
  ],
  message: {
    name: "message",
    type: "textarea",
    label: "Message",
  },
};
