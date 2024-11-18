import React from 'react'
import { ErrorText, IconContainer, InputContainer, InputText } from './styles'
import { IInput } from './types';

//controle de funçao/variavel/return
import { Controller } from "react-hook-form";

const Input = ({leftIcon, name, control, errorMessage, ...rest} :  IInput) => {
    return (
        <>
    <InputContainer>
        {/*conteiner de verificação de entrada de daos*/}
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        rules={{required:true}}
        /*validação de verificação de elementos*/
        render={({ field }) => <InputText {...field} {...rest}/>}
        />
    </InputContainer>
        {errorMessage ? <ErrorText> {errorMessage} </ErrorText> : null}
        </>
    )
}
export { Input };