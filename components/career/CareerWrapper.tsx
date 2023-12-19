import React, { ReactNode } from "react";

interface CareerWrapperProps {
  children: ReactNode;
}

function CareerWrapper({ children }: CareerWrapperProps) {
  return (
    <div className="section career">
      <div className="container">{children}</div>
    </div>
  );
}

export default CareerWrapper;
