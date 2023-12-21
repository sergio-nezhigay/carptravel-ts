import React from "react";

interface SuccessMessageProps {
  message: string | null;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <>
      {message && (
        <h2 className="absolute bottom-[-50px] w-full text-[14px] text-green-400 md:text-lg">
          {message}
        </h2>
      )}
    </>
  );
};

export default SuccessMessage;
