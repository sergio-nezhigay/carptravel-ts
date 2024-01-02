"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { Form } from "@/components/ui/form";
import Field from "./Field";
import CheckboxWithText from "./CheckboxWithText";
import SuccessMessage from "./SuccessMessage";
import SubmitButton from "./SubmitButton";

import { careerFormSchema } from "./schema";

import {
  COMMENTS,
  FORM_CONFIG,
  INITIAL_CAREER_FORM_DATA,
} from "@/constants/career";

const CareerForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );

  const form = useForm<z.infer<typeof careerFormSchema>>({
    resolver: zodResolver(careerFormSchema),
  });

  const { formState, watch, setValue, register, handleSubmit, control } = form;
  useFormPersist("careerForm", {
    watch,
    setValue,
  });

  async function onSubmit(values: z.infer<typeof careerFormSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    form.reset(INITIAL_CAREER_FORM_DATA);
    setSuccessMessage(FORM_CONFIG.submitSuccessMessage);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setSuccessMessage("");
  }

  return (
    <>
      <div className="body-extralight-13 mb-6 max-md:ml-[100px] md:mb-8 lg:mb-[14px]">
        {COMMENTS.map((comment) => (
          <p key={comment}>{comment}</p>
        ))}
      </div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="items-stretch md:flex md:h-fit md:gap-5 lg:gap-6">
            <div className="md:w-[221.3px] lg:w-[290px]">
              {FORM_CONFIG.inputs.map((field) => (
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
              name={FORM_CONFIG.message.name}
              type={FORM_CONFIG.message.type}
              label={FORM_CONFIG.message.label}
              error={formState.errors.message?.message}
            />
          </div>
          <div className="relative md:flex md:items-start">
            <CheckboxWithText
              name="consent"
              control={control}
              register={register}
              label={FORM_CONFIG.checkbox?.label!}
              description={FORM_CONFIG.checkbox?.description!}
            />
            <SubmitButton
              isSubmitting={formState.isSubmitting}
              label={FORM_CONFIG.button.label}
              labelInProgress={FORM_CONFIG.button.labelInProgress}
            />
          </div>
          <SuccessMessage message={successMessage} />
        </form>
      </Form>
    </>
  );
};

export default CareerForm;
