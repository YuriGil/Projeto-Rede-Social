import { FieldError } from "react-hook-form";
export interface InputFieldProps {
    type: string;
    placeholder: string;
    icon: string;
    register: any;
    name: string;
    error?: FieldError;
  }
 