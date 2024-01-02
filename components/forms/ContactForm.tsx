"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { Form } from "@/components/ui/form";
import SubmitButton from "./SubmitButton";
import Field from "./Field";
import SuccessMessage from "./SuccessMessage";

import { contactFormSchema } from "./schema";

import { CONTACT_FORM_CONFIG } from "@/constants/contacts";

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    form.reset();
    setSuccessMessage(CONTACT_FORM_CONFIG.submitSuccessMessage);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setSuccessMessage("");
  }

  return (
    <div className="lg:w-1/2">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative lg:flex lg:h-full lg:flex-col"
        >
          <div className="h-full grow md:flex md:h-[265px] md:gap-5 lg:h-auto lg:flex-col lg:gap-4">
            <div className=" md:w-[221.3px] lg:flex lg:w-full lg:gap-5 ">
              {CONTACT_FORM_CONFIG.inputs.map((field) => (
                <Field
                  key={field.name}
                  register={register}
                  control={control}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  label={field.label}
                  error={formState.errors}
                />
              ))}
            </div>
            <Field
              register={register}
              control={control}
              name={CONTACT_FORM_CONFIG.message.name}
              type={CONTACT_FORM_CONFIG.message.type}
              label={CONTACT_FORM_CONFIG.message.label}
              error={formState.errors}
            />
          </div>
          <SubmitButton
            isSubmitting={formState.isSubmitting}
            label={CONTACT_FORM_CONFIG.button.label}
            labelInProgress={CONTACT_FORM_CONFIG.button.labelInProgress}
          />
          <SuccessMessage message={successMessage} />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
