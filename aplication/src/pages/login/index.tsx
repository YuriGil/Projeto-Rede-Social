import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

// Criação de formulários
import { useForm } from "react-hook-form";

// Validação de formulário
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

import { IFormLogin } from "./types";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  Wrapper,
  TitleLogin,
} from "./styles";
import { IFormData } from "./types";

// Const de armazenamento de informações (Nome/email)
const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

// Função de verificação de validação
const Login = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "", // Defina valores padrão aqui
      password: "",
    },
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      // Faz a requisição para buscar o usuário com o email e senha fornecidos
      const { data } = await api.get(
        `users?email=${formData.email}&password=${formData.password}`
      );

      // Verifica se encontrou exatamente um usuário
      if (data.length === 1) {
        alert("Login realizado com sucesso!");
        navigate("/feed");
      } else {
        alert("Email ou senha inválidos");
      }
    } catch (error) {
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column>
          <Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequuntur repudiandae amet quaerat maiores iste est quo, et
            eligendi, optio necessitatibus fugit provident ipsum nam aperiam.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu login</TitleLogin>
            <SubTitleLogin>Faça seu login e mude sua vida</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Validação de email e senha */}
              <Input
                name="email"
                placeholder="Email"
                control={control}
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                control={control}
                errorMessage={errors?.password?.message}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
