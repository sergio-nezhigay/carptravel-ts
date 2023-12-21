import * as z from "zod";

export const careerFormSchema = z.object({
  username: z.string().min(2, {
    message: "✕ Incorrect name",
  }),
  email: z.string(),
  phone: z.string(),
  position: z.string(),
  message: z.string(),
  consent: z.boolean().refine((value) => value === true, {
    message: "You must consent to send this message",
  }),
});

export const contactFormSchema = z.object({
  username: z.string().min(2, {
    message: "✕ Incorrect name",
  }),
  email: z.string().email({
    message: "✕ Incorrect Email",
  }),
  message: z.string(),
});
