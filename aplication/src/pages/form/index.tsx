// form/index.tsx

import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import {
  Container,
  Content,
  Title,
  TitleHighLight,
  TextContent,
  InputWrapper,
  BannerImage,
  Divider,
  FormWrapper,
  ButtonGroup,
  Left, 
  Right, 
  Logo
} from "./styles";
import capivaraLogo from "../../assets/capivaraLogo.png";
import { FormData } from "./types";
import { api } from "../../services/api";

const schema = yup.object().shape({
  nome: yup.string().required("O campo é obrigatório."),
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("O campo é obrigatório."),
  idade: yup
    .number()
    .required("O campo é obrigatório.")
    .positive("O campo deve ser positivo.")
    .integer("O campo deve ser um número inteiro."),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("O campo é obrigatório."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "As senhas devem coincidir")
    .required("Confirmação de senha é obrigatória."),
});

const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as unknown as any,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await api.get(`/users?email=${data.email}`);
      if (response.data.length > 0) {
        alert("E-mail já cadastrado. Tente fazer login.");
        return;
      }
      await api.post("/users", {
        nome: data.nome,
        email: data.email,
        idade: data.idade,
        password: data.password,
      });
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <Container>
      <Content>
        <Left>        
        <Logo src={capivaraLogo} alt="site logo" onClick={() => navigate("/")} />
        <Title>
          <TitleHighLight>
            Application
            <br />
          </TitleHighLight>
          BETA
        </Title>
       </Left> 
       <Right>
       <FormWrapper>
        <TextContent>Preencha os campos abaixo para criar sua conta</TextContent>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <MdLock />
              <input
                type="text"
                placeholder="Nome"
                {...register("nome")}
              />
            </InputWrapper>
            {errors.nome && <span>{errors.nome.message}</span>}
            
            <InputWrapper>
              <MdLock />
              <input
                type="text"
                placeholder="Nome de usuario"
                {...register("userName")}
              />
            </InputWrapper>  
            {errors.nome && <span>{errors.nome.message}</span>}
            
            <InputWrapper>
              <MdLock />
              <input
                type="number"
                placeholder="Idade"
                {...register("idade")}
              />
            </InputWrapper>
            {errors.idade && <span>{errors.idade.message}</span>}

            <InputWrapper>
              <MdLock />
              <input
                type="number"
                placeholder="Numero de celular"
                {...register("phNumber")}
              />
            </InputWrapper>
            {errors.idade && <span>{errors.idade.message}</span>}
            
            <InputWrapper>
              <MdEmail />
              <input
                type="email"
                placeholder="E-mail"
                {...register("email")}
              />
            </InputWrapper>
            {errors.email && <span>{errors.email.message}</span>}

            <InputWrapper>
              <MdLock />
              <input
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
            </InputWrapper>
            {errors.password && <span>{errors.password.message}</span>}

            <InputWrapper>
              <MdLock />
              <input
                type="password"
                placeholder="Confirmar Senha"
                {...register("confirmPassword")}
              />
            </InputWrapper>
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

            <Button title="Cadastrar" type="submit" />
          </form>
          <ButtonGroup>
            <Divider />
            <Button title="Voltar para Login" onClick={() => navigate("/login")} />
          </ButtonGroup>
        </FormWrapper>
        </Right>
      </Content>
      <BannerImage img={capivaraLogo} />
    </Container>
  );
};

export { Form };
