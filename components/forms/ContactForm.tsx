"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { contactFormSchema } from "./schema";
import { Form } from "@/components/ui/form";
import SubmitButton from "./SubmitButton";
import Field from "./Field";
import SuccessMessage from "./SuccessMessage";

const ContactForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const { formState, watch, setValue, register, handleSubmit, control } = form;
  useFormPersist("contactForm", {
    watch,
    setValue,
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log("Form values are:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    form.reset();
    setSuccessMessage("Your message has been successfully sent!");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setSuccessMessage("");
  }
  return (
    <div className="lg:w-1/2">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:flex lg:h-full lg:flex-col"
        >
          <div className="h-full grow md:flex md:h-fit md:gap-5 lg:flex-col lg:gap-4">
            <div className=" md:w-[221.3px] lg:flex  lg:w-full lg:gap-5 ">
              <Field
                register={register}
                control={control}
                name="username"
                placeholder="John Smith"
                label="Full name"
                error={formState.errors.username?.message}
              />
              <Field
                register={register}
                control={control}
                name="email"
                placeholder="johnsmith@email.com"
                label="E - mail"
                error={formState.errors.email?.message}
              />
            </div>
            <Field
              register={register}
              control={control}
              name="message"
              label="Message"
              error={formState.errors.message?.message}
              isTextarea
            />
          </div>
          <div className="md:flex md:items-start">
            <SuccessMessage message={successMessage} />
            <SubmitButton isSubmitting={formState.isSubmitting} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
