import { Checkbox } from "@/components/ui/checkbox";

import { FormField, FormItem, FormControl, FormLabel } from "../ui/form";

import { ICheckbox } from "@/types";

function CheckboxWithText({ control, name, register }: ICheckbox) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
          <FormControl>
            <div className="flex-center border border-white p-[3px]">
              <Checkbox
                {...register(name)}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </div>
          </FormControl>
          <div className="space-y-1 leading-none md:max-w-[192px]">
            <FormLabel className="text-[12px] font-extralight leading-[22px] ">
              I confirm my consent to the processing of personal data.
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
}

export default CheckboxWithText;
