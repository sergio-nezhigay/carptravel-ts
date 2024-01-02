import React from "react";

import { ITitle } from "@/types";

const Title: React.FC<ITitle> = ({ prefix, suffix, styles }) => {
  return (
    <h2 className={`title-thin shrink-0 ${styles}`}>
      {prefix} <span className="font-medium">{suffix}</span>
    </h2>
  );
};

export default Title;
