import React from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "../ui/form";
import { Input } from "../ui/input";
import { FieldProps } from "@/types";

function Field({
  register,
  name,
  control,
  label,
  isTextarea = false,
  isTel = false,
  placeholder,
  error,
}: FieldProps) {
  const errorClass = error ? "text-[#FF5757]" : "";
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem
          className={`mb-4 space-y-1  lg:mb-6 ${
            isTextarea ? " flex  flex-col md:w-1/2" : "  "
          } ${isTel ? "country-code" : ""}`}
        >
          <FormLabel
            id={label.replace(/[^a-zA-Z]/g, "")}
            className={`${errorClass}  text-[12px] font-extralight leading-5 tracking-[0.20em] md:leading-6`}
          >
            {label}
          </FormLabel>
          <FormControl
            aria-describedby={label.replace(/[^a-zA-Z]/g, "")}
            className={` `}
          >
            {isTextarea ? (
              <textarea
                placeholder={placeholder}
                {...register(name)}
                className="h-[196px] w-full grow resize-none rounded-none bg-white/5 px-2 py-0 text-[13px]  font-extralight leading-6 transition placeholder:text-white/20 focus:outline-white/5 focus:ring-transparent md:h-[228px] md:w-[221px] lg:w-[292px] "
              />
            ) : (
              <div className="flex-center relative text-[13px] lg:text-[20px]">
                {isTel && (
                  <span className="absolute left-2  font-extralight leading-6">
                    +38
                  </span>
                )}
                <Input
                  placeholder={placeholder}
                  {...register(name)}
                  type={isTel ? "tel" : "text"}
                  className={`${errorClass} ${
                    isTel ? "pl-[34px] lg:pl-[49px]" : "pl-2"
                  } h-6 rounded-none border-none border-transparent bg-white/5 py-0 pr-2  font-extralight leading-6 transition placeholder:text-white/20 focus:outline-white/5 focus:ring-transparent lg:h-7 lg:text-[20px]    `}
                />
              </div>
            )}
          </FormControl>
          <FormMessage
            className={` text-right text-[12px] font-extralight tracking-[0.20em] ${errorClass}`}
          />
        </FormItem>
      )}
    />
  );
}

export default Field;
