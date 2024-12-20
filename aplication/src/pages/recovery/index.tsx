import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import capivaraLogo from "../../assets/capivaraLogo.png";
import {
  Container,
  Content,
  Title,
  TitleHighLight,
  TextContent,
  InputWrapper,
  BannerImage,
  ButtonGroup,
  Logo,
  HeadContainer,
  Divider
} from "./styles";
// Validação do formulário
const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
});

const Recovery: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<{ email: string }> = async (data) => {
    try {
      const response = await api.get(`/users?email=${data.email}`);
      if (response.data.length > 0) {
        const userId = response.data[0].id;
        await api.post("/send-recovery-email", { email: data.email, userId });

        alert("Um link para redefinição de senha foi enviado ao seu e-mail.");
        navigate("/login");
      } else {
        alert("E-mail não encontrado. Verifique se o e-mail está correto.");
      }
    } catch (error) {
      console.error("Erro ao processar solicitação:", error);
      alert("Erro ao processar sua solicitação. Tente novamente mais tarde.");
    }
  };

  return (
    <Container>
      <Content>
        <HeadContainer>
          <Logo src={capivaraLogo} alt="site logo" onClick={() => navigate("/")} />
          <Title>
            <TitleHighLight>
              Recuperação
              <br />
            </TitleHighLight>
            de Senha
          </Title>
        </HeadContainer>
        <TextContent>
          Insira seu e-mail para receber instruções de redefinição de senha.
        </TextContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <MdEmail />
            <Input
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              control={control}
              errorMessage={errors.email?.message}
            />
          </InputWrapper>
          <ButtonGroup>
            <Button 
            style={{width:"100%"}}
            title="Enviar" 
            type="submit" />
            <Divider/>
            <Button
              title="Voltar ao Login"
              variant="secondery"
              onClick={() => navigate("/login")}
            />
          </ButtonGroup>
        </form>
      </Content>
      <BannerImage img={capivaraLogo} />
    </Container>
  );
};

export { Recovery };
