import React from "react";

interface ITitle {
  prefix: string;
  suffix: string;
  styles?: string;
}

const Title: React.FC<ITitle> = ({ prefix, suffix, styles }) => {
  return (
    <h2 className={`title-thin shrink-0  ${styles}`}>
      {prefix} <span className="font-medium">{suffix}</span>
    </h2>
  );
};

export default Title;
