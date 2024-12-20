import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"; // Corrigido para importação correta
import {
  Container,
  Content,
  Title,
  TitleHighLight,
  TextContent,
  ButtonGroup,
  BannerImage,
  Left,
  Right,
  Divider,
  InputWrapper, 
  Logo,
  Divider2,
  HeadContainer
} from "./styles"; // Certifique-se que está importando corretamente
import capivaraLogo from "../../assets/capivaraLogo.png";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "No mínimo 6 caracteres").required("Campo obrigatório"),
});

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: any) => {
    const success = await login(formData.email, formData.password);
    if (success) {
      navigate("/feed");
    } else {
      alert("Email ou senha inválidos.");
    }
  };

  return (
    <Container>
      <Content>
        <Left>
        <HeadContainer>
  <Logo src={capivaraLogo} alt="site logo" onClick={() => navigate("/")} />
  <Title>
    <TitleHighLight>
      Application
      <br />
    </TitleHighLight>
    BETA
  </Title>
</HeadContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail:</label>
        <InputWrapper>
        <MdEmail />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
            />
            </InputWrapper>
          <label htmlFor="password">Senha:</label>
          <InputWrapper>
          <MdLock />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
            />
            </InputWrapper>
            <Button title="Entrar" type="submit" />
        </form>
        </Left>
        <Divider />
          <Right>
          <TextContent>
          Conecte-se e compartilhe com as pessoas que fazem parte da sua vida
        </TextContent>
          <ButtonGroup>
            <Button
              title="Esqueci minha senha"
              onClick={() => navigate("/recovery")}
              />
              <Divider2/>
            <Button title="Criar uma conta" onClick={() => navigate("/form")} />
          </ButtonGroup>
          </Right>
      </Content>
      <BannerImage img={capivaraLogo} />
    </Container>
  );
};

export { Login };
