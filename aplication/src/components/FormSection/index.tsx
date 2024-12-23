import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import  InputField  from "../InputFieldForm";
import { FormData } from "./types";
import { schema } from "../../components/ValidationForm/validation";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { TextContent } from "../../components/LoginPrompt/styles";

const FormSection = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema) as unknown as any,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await api.get(`/users?email=${data.email}`);
      if (response.data.length > 0) {
        alert("E-mail já cadastrado. Tente fazer login.");
        return;
      }
      await api.post("/users", data);
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <>
      <TextContent>Preencha os campos abaixo para criar sua conta</TextContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField type="text" placeholder="Nome" icon="lock" register={register} name="nome" error={errors.nome} />
        <InputField type="text" placeholder="Nome de usuário" icon="lock" register={register} name="userName" error={errors.userName} />
        <InputField type="number" placeholder="Idade" icon="lock" register={register} name="idade" error={errors.idade} />
        <InputField type="number" placeholder="Número de celular" icon="lock" register={register} name="phNumber" error={errors.phNumber} />
        <InputField type="email" placeholder="E-mail" icon="email" register={register} name="email" error={errors.email} />
        <InputField type="password" placeholder="Senha" icon="lock" register={register} name="password" error={errors.password} />
        <InputField type="password" placeholder="Confirmar Senha" icon="lock" register={register} name="confirmPassword" error={errors.confirmPassword} />
        <Button title="Cadastrar" type="submit" />
      </form>
    </>
  );
};

export default FormSection;
