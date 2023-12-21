import React from "react";
import { Button } from "../ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <Button
      type="submit"
      className="underline-on-hover ml-auto block p-0 text-[30px] font-medium uppercase leading-9 focus:ring-transparent max-md:mt-4 md:mt-[-8px] lg:text-[32px] lg:leading-[38px] "
      disabled={isSubmitting}
    >
      {isSubmitting ? "Sending..." : "Send"}
    </Button>
  );
};

export default SubmitButton;
