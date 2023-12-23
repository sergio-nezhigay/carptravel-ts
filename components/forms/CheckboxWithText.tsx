import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  FormDescription,
} from "../ui/form";

import { ICheckbox } from "@/types";

const CheckboxWithText: React.FC<ICheckbox> = ({ control, name, register }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
            <div className="flex-center border border-white bg-black p-[3px]">
              <FormControl className="flex-center border border-white p-1 focus:outline-white ">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border border-black"
                  {...register(name)}
                />
              </FormControl>{" "}
            </div>
            <FormLabel className="text-[12px] font-extralight leading-[22px] ">
              I confirm my consent to the processing of personal data.
            </FormLabel>
            <FormDescription className="sr-only">
              Agree to the terms
            </FormDescription>
          </FormItem>
          <FormMessage
            className={`absolute bottom-[5px] text-[12px] font-extralight tracking-[0.20em] text-[#FF5757] max-md:max-w-[200px] md:bottom-[-25px] `}
          />
        </>
      )}
    />
  );
};

export default CheckboxWithText;
