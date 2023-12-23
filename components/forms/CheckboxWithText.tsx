import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
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
            <FormControl>
              <div className="flex-center border border-white p-[3px]">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  // {...register(name)}
                />
              </div>
            </FormControl>
            <div className="space-y-1 leading-none md:max-w-[192px]">
              <FormLabel className="text-[12px] font-extralight leading-[22px] ">
                I confirm my consent to the processing of personal data.
              </FormLabel>
            </div>
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