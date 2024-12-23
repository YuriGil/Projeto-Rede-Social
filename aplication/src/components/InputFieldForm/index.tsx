import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { InputWrapper } from "./styles";
import { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, icon, register, name, error }) => {
  const Icon = icon === "email" ? MdEmail : MdLock;

  return (
    <>
      <InputWrapper>
        <Icon />
        <input type={type} placeholder={placeholder} {...register(name)} />
      </InputWrapper>
      {error && <span>{error.message}</span>}
    </>
  );
};

export default InputField;
