import React from "react";
import { ISuccessMessage } from "@/types";

const SuccessMessage: React.FC<ISuccessMessage> = ({ message }) => {
  return (
    <>
      {message && (
        <h2 className="absolute w-full  text-[14px] text-green-400 md:text-lg lg:bottom-[-30px]">
          {message}
        </h2>
      )}
    </>
  );
};

export default SuccessMessage;
