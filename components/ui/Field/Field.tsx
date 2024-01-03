import React from "react";
import { useHookFormMask } from "use-mask-input";

import { Input } from "@/components/ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormDescription,
} from "@/components/ui/form";

import { IField } from "./types";

export const Field: React.FC<IField> = ({
  register,
  name,
  control,
  label,
  type = "text",
  placeholder,
  error,
}) => {
  const registerWithMask = useHookFormMask(register);

  const errorClass = error && error[name] && "text-[#FF5757]";
  const commonStyles = `
  rounded-none bg-white/5 hover:bg-white/10 transition py-0 text-[13px] font-extralight leading-6 transition placeholder:text-white/20 focus:outline-white/5 focus:ring-transparent
`;

  const inputStyles = `${errorClass} ${commonStyles} h-6 lg:h-7 border-none border-transparent bg-white/5 lg:text-[20px] flex-center pr-2`;

  const textareaStyles = `
  max-md:min-h-[195px] w-full grow resize-none ${commonStyles} px-2 lg:h-full lg:min-h-[174px] lg:w-full
`;

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={""}
      render={({ field }) => (
        <FormItem
          className={`relative mb-4 grow space-y-1 lg:mb-6
          ${type === "textarea" && "flex grow flex-col"} `}
        >
          <FormLabel
            className={`${errorClass} ${
              type === "tel" && "phone-prefix"
            }  text-[12px] font-extralight leading-5 tracking-[0.20em] md:leading-6`}
          >
            {label}
          </FormLabel>
          {type === "textarea" && (
            <FormControl className=" h-full">
              <textarea
                placeholder={placeholder}
                {...field}
                {...register(name)}
                className={textareaStyles}
              />
            </FormControl>
          )}
          {type === "tel" && (
            <FormControl className=" h-full">
              <Input
                {...field}
                {...registerWithMask(name, "(099) 99 99 999")}
                placeholder={placeholder}
                type="text"
                className={`${inputStyles} pl-[42px] lg:pl-[56px] `}
              />
            </FormControl>
          )}
          {type === "text" && (
            <FormControl className=" h-full">
              <Input
                placeholder={placeholder}
                {...field}
                {...register(name)}
                type="text"
                className={`${inputStyles} pl-2 `}
              />
            </FormControl>
          )}
          <FormDescription className="sr-only">{label}</FormDescription>
          <FormMessage
            className={`absolute bottom-[-20px] right-0 text-right text-[12px] font-extralight tracking-[0.20em] ${errorClass}`}
          />
        </FormItem>
      )}
    />
  );
};
