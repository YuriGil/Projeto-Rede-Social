import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IRecoverPasswordForm } from "./types";
import { 
  FormWrapper, 
  InputGroup, 
  InfoText, 
  RecoverText, 
  BannerImage, 
  Title, 
  TitleHighLight, 
  TextContent 
} from "./styles";

// Validação do formulário
const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
});

const Recovery: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm<IRecoverPasswordForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IRecoverPasswordForm> = async (data) => {
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
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>
          <TitleHighLight>
            Esqueci Minha Senha
            <br />
          </TitleHighLight>
        </Title>
        <TextContent>
          Insira seu e-mail para receber instruções de redefinição de senha.
        </TextContent>
        <InputGroup>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            control={control} // Passando o control do useForm
            errorMessage={errors.email?.message}
            leftIcon={<MdEmail />}
          />
          <Button title="Enviar" type="submit" />
        </InputGroup>
      </form>
      <RecoverText onClick={() => navigate("/login")}>
        Voltar para Login
      </RecoverText>
    </FormWrapper>
  );
};

export { Recovery };
