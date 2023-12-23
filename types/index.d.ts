import { ReactNode } from "react";
type FieldType = "textarea" | "text" | "tel";

export interface IField {
  register: any;
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  type?: FieldType | undefined;
  error?: any;
}

interface IFormField {
  name: string;
  placeholder: string;
  type: "text" | "textarea" | "tel";
  label: string;
}

export interface IFormConfig {
  inputs: IFormField[];
  message: {
    name: string;
    type: "textarea";
    label: string;
  };
}

export interface ICheckbox {
  register: any;
  name: string;
  control: any;
}

export interface ISubmitButton {
  isSubmitting: boolean;
}

export interface ISuccessMessage {
  message: string | null;
}

export interface ICareerWrapper {
  children: ReactNode;
}
