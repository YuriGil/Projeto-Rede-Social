import React from 'react'
import { ErrorText, IconContainer, InputContainer, InputText } from './styles'
import { IInput } from './types';

//controle de funçao/variavel/return
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
    return (
      <>
        <InputContainer>
          {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field} {...rest} />}
          />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </>
    );
  };
  export { Input };
  