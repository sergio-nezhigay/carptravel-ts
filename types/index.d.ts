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
  checkbox?: {
    label: string;
    description: string;
  };
  submitSuccessMessage: string;
  button: {
    label: string;
    labelInProgress: string;
  };
}

export interface ICheckbox {
  register: any;
  name: string;
  control: any;
  label: string;
  description: string;
}

export interface ISubmitButton {
  isSubmitting: boolean;
  label: string;
  labelInProgress: string;
}

export interface ISuccessMessage {
  message: string | null;
}

export interface ICareerWrapper {
  children: ReactNode;
}

export interface IServicesList {
  indexCurrent: number;
  currentService: number;
  goToSlide(index: number): any;
}

export interface ITitle {
  prefix: string;
  suffix: string;
  styles?: string;
}
