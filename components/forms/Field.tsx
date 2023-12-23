import React from "react";
import { useHookFormMask } from "use-mask-input";

import { IField } from "@/types";
import { Input } from "../ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormDescription,
} from "../ui/form";

const Field: React.FC<IField> = ({
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
  const commonInputStyles = `${errorClass} h-6 lg:h-7 rounded-none border-none border-transparent bg-white/5 py-0 pr-2 font-extralight leading-6 transition placeholder:text-white/20 focus:outline-white/5 focus:ring-transparent lg:text-[20px] flex-center text-[13px] lg:text-[20px]`;

  const textareaStyles = `
    h-[196px] w-full grow resize-none rounded-none bg-white/5 px-2 py-0 text-[13px] font-extralight leading-6 transition placeholder:text-white/20 focus:outline-white/5 focus:ring-transparent
    md:h-[228px] md:w-full lg:h-full lg:min-h-[174px] lg:w-full
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
                className={`${commonInputStyles}  pl-[42px] lg:pl-[56px] `}
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
                className={`${commonInputStyles} pl-2 `}
              />
            </FormControl>
          )}
          <FormDescription className="sr-only">Enter {label}</FormDescription>
          <FormMessage
            className={`absolute bottom-[-20px] right-0 text-right text-[12px] font-extralight tracking-[0.20em] ${errorClass}`}
          />
        </FormItem>
      )}
    />
  );
};

export default Field;
