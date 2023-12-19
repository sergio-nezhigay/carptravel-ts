import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "✕ Incorrect name",
  }),
  email: z.string().email({
    message: "✕ Incorrect Email",
  }),
  phone: z.string().min(2, {
    message: "✕ Incorrect phone",
  }),
  position: z.string(),
  message: z.string(),
  isConfirmed: z.boolean(),
});

export default formSchema;
