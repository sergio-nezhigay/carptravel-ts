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
import { useHookFormMask } from "use-mask-input";

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
  const registerWithMask = useHookFormMask(register);
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem
          className={`mb-4 space-y-1  lg:mb-6 ${
            isTextarea ? " flex   grow flex-col" : "grow  "
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
            className={`h-full `}
          >
            <div className="relative">
              {isTextarea ? (
                <textarea
                  placeholder={placeholder}
                  {...register(name)}
                  className="h-[196px] w-full grow resize-none rounded-none bg-white/5 px-2 py-0 text-[13px] font-extralight  leading-6 transition placeholder:text-white/20 focus:outline-white/5 focus:ring-transparent md:h-[228px] md:w-full lg:h-full lg:min-h-[174px] lg:w-full"
                />
              ) : (
                <div className="flex-center  text-[13px]  lg:text-[20px]">
                  {isTel ? (
                    <>
                      <span className="absolute left-2  font-extralight leading-6">
                        + 38
                      </span>
                      <Input
                        {...registerWithMask(name, "(099) 99 99 999")}
                        placeholder={placeholder}
                        type="text"
                        className={`${errorClass} ${
                          isTel ? "pl-[40px] lg:pl-[56px]" : "pl-2"
                        } h-6 rounded-none border-none border-transparent bg-white/5 py-0 pr-2  font-extralight leading-6 transition placeholder:text-white/20 focus:outline-white/5 focus:ring-transparent lg:h-7 lg:text-[20px]    `}
                      />
                    </>
                  ) : (
                    <Input
                      placeholder={placeholder}
                      {...register(name)}
                      type={isTel ? "tel" : "text"}
                      className={`${errorClass} ${
                        isTel ? "pl-[34px] lg:pl-[49px]" : "pl-2"
                      } h-6 rounded-none border-none border-transparent bg-white/5 py-0 pr-2  font-extralight leading-6 transition placeholder:text-white/20 focus:outline-white/5 focus:ring-transparent lg:h-7 lg:text-[20px]    `}
                    />
                  )}
                </div>
              )}
              <FormMessage
                className={`absolute bottom-[-20px] right-0 text-right text-[12px] font-extralight tracking-[0.20em] ${errorClass}`}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default Field;
