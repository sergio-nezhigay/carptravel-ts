"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { Form } from "@/components/ui/form";
import { careerFormSchema } from "./schema";

import Field from "./Field";
import CheckboxWithText from "./CheckboxWithText";
import SuccessMessage from "./SuccessMessage";
import SubmitButton from "./SubmitButton";

function CareerForm() {
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );

  const initialFormData = {
    username: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    consent: false,
  };

  const form = useForm<z.infer<typeof careerFormSchema>>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: async () => {
      if (localStorage.getItem("careerForm")) {
        const storedValues = JSON.parse(
          localStorage.getItem("careerForm") || "{}"
        );
        return storedValues;
      }
      return initialFormData;
    },
  });

  const { formState, watch, setValue, register, handleSubmit, control } = form;
  useFormPersist("careerForm", {
    watch,
    setValue,
  });

  async function onSubmit(values: z.infer<typeof careerFormSchema>) {
    console.log("Form values are:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    form.reset(initialFormData);
    setSuccessMessage("Your message has been successfully sent!");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setSuccessMessage("");
  }

  return (
    <>
      <p className="body-extralight-13 mb-6 max-md:ml-[100px] md:mb-8 lg:mb-[14px]">
        Don&apos;t miss your opportunity!
        <br />
        Fill out the form right now
        <br />
        and join our team!
      </p>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="items-stretch md:flex md:h-fit md:gap-5 lg:gap-6">
            <div className="md:w-[221.3px] lg:w-[290px]">
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
              <Field
                register={register}
                control={control}
                name="position"
                placeholder="Movie maker"
                label="Position"
                error={formState.errors.position?.message}
              />
              <Field
                register={register}
                control={control}
                isTel
                name="phone"
                placeholder="(097) 12 34 567"
                label="Phone"
                error={formState.errors.phone?.message}
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
          <div className="relative md:flex md:items-start">
            <CheckboxWithText
              name="consent"
              control={control}
              register={register}
            />
            <SubmitButton isSubmitting={formState.isSubmitting} />
          </div>
          <SuccessMessage message={successMessage} />
        </form>
      </Form>
    </>
  );
}

export default CareerForm;
