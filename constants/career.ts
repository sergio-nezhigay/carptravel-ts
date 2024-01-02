import { IFormConfig } from "@/types";

const CARREER_ADVANTAGES = [
  {
    title: "Professional development",
    description:
      "We offer growth opportunities and a creative environment to nurture your talents.",
  },
  {
    title: "Teamwork",
    description:
      "Join our close-knit family, where support and inspiration abound.",
  },
  {
    title: "Stimulating work environment",
    description: "Flexibility and remote options for a comfortable experience.",
  },
  {
    title: "Exciting challenges",
    description:
      "Unleash your potential through unforgettable projects showcasing Carpathian beauty.",
  },
];

const careerConstants = {
  sectionId: "career",
  titlePrefix: "Choose",
  titleSuffix: "us",
  description: `
    Your chance to join our passionate team in Carpathian tourism.
    Seeking talented professionals to share our common mission.
   `,
  whyUsTitle: "Why us?",
  formSectionTitle: "Your Next Adventure Awaits",
};

export const CAREER_DATA = {
  ...careerConstants,
  advantages: CARREER_ADVANTAGES,
};

export const INITIAL_CAREER_FORM_DATA = {
  username: "",
  email: "",
  phone: "",
  position: "",
  message: "",
  consent: false,
};

export const FORM_CONFIG: IFormConfig = {
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
      label: "E - mail",
    },
    {
      name: "position",
      placeholder: "Movie maker",
      type: "text",
      label: "Position",
    },
    {
      name: "phone",
      placeholder: "(097) 12 34 567",
      type: "tel",
      label: "Phone",
    },
  ],
  message: {
    name: "message",
    type: "textarea",
    label: "Message",
  },
  checkbox: {
    label: "I confirm my consent to the processing of personal data.",
    description: "Agree to the terms",
  },
  submitSuccessMessage: "Your message has been successfully sent!",
  button: {
    label: "Send",
    labelInProgress: "Sending...",
  },
};

export const COMMENTS: string[] = [
  "Don't miss your opportunity!",
  "Fill out the form right now",
  "and join our team!",
];
