import React from "react";

import { Button } from "../ui/button";

import { ISubmitButton } from "@/types";

const SubmitButton: React.FC<ISubmitButton> = ({
  isSubmitting,
  label,
  labelInProgress,
}) => {
  return (
    <Button
      type="submit"
      className="underline-on-hover ml-auto block p-0 text-[30px] font-medium uppercase leading-9 focus:ring-transparent max-md:mt-4 md:mt-[-8px] lg:text-[32px] lg:leading-[38px] "
      disabled={isSubmitting}
    >
      {isSubmitting ? labelInProgress : label}
    </Button>
  );
};

export default SubmitButton;
