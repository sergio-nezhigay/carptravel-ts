export interface FieldProps {
  register: any;
  name: string;
  control: any;
  label: string;
  isTextarea?: boolean | string;
  isTel?: boolean;
  placeholder?: string;
  error?: string | undefined;
}

export interface ICheckbox {
  register: any;
  name: string;
  control: any;
  error?: string | undefined;
}
