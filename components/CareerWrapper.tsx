import React from "react";

import { ICareerWrapper } from "@/types";

const CareerWrapper: React.FC<ICareerWrapper> = ({ children }) => {
  return (
    <div className="section career">
      <div className="container">{children}</div>
    </div>
  );
};

export default CareerWrapper;
