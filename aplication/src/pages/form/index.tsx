import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, Wrapper, TitleLogin } from './styles';
import { FormData } from './types'; // Importa a interface de types.ts

// Esquema de validação
const schema = yup.object().shape({
    nome: yup.string().required("O campo é obrigatório."),
    email: yup.string().email("E-mail inválido.").required("O campo é obrigatório."),
    idade: yup.number().required("O campo é obrigatório.").positive("O campo deve ser positivo.").integer("O campo deve ser um número inteiro."),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("O campo é obrigatório."),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), undefined], "As senhas devem coincidir")
        .required("Confirmação de senha é obrigatória."),
}).required();

const Form = () => {
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
            
            await api.post("/users", {
                nome: data.nome,
                email: data.email,
                idade: data.idade,
                userName: data.userName,
                phNumber: data.phNumber,
                password: data.password
            });
            
            alert("Cadastro realizado com sucesso!");
            navigate("/home");
        } catch (error) {
            alert("Erro ao cadastrar. Tente novamente.");
        }
    };

    return (
        <>
            <Header autenticado={false}/>
            <Container>
                <Column />
                <Column>
                    <Wrapper>
                        <Title>CADASTRE-SE!</Title>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e mude sua vida</SubTitleLogin>
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <MdLock />
                                    <input
                                        id="nome"
                                        type="text"
                                        placeholder="Digite o nome "
                                        {...register("nome")}
                                    />
                                </div>
                                {errors.nome && <div>{errors.nome.message}</div>}
                            </div>

                            <div>
                                <label htmlFor="email">E-mail</label>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <MdEmail />
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                        {...register("email")}
                                    />
                                </div>
                                {errors.email && <div>{errors.email.message}</div>}
                            </div>

                            <div>
                                <label htmlFor="idade">Idade</label>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <MdLock />
                                    <input
                                        id="idade"
                                        type="number"
                                        placeholder="Digite sua idade"
                                        {...register("idade")}
                                    />
                                </div>
                                {errors.idade && <div>{errors.idade.message}</div>}
                            </div>
                            
                            <div>
                                <label htmlFor="userName">Nome de Usuário</label>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <MdLock />
                                    <input
                                        id="userName"
                                        type="text"
                                        placeholder="Digite o nome de usuário"
                                        {...register("userName")}
                                    />
                                </div>
                                {errors.userName && <div>{errors.userName.message}</div>}
                            </div>

                            <div>
                                <label htmlFor="phNumber">Número de Telefone</label>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <MdLock />
                                    <input
                                        id="phNumber"
                                        type="text"
                                        placeholder="Digite o número de telefone"
                                        {...register("phNumber")}
                                    />
                                </div>
                                {errors.phNumber && <div>{errors.phNumber.message}</div>}
                            </div>

                            <div>
                                <label htmlFor="password">Senha</label>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <MdLock />
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Digite a senha"
                                        {...register("password")}
                                    />
                                </div>
                                {errors.password && <div>{errors.password.message}</div>}
                            </div>

                            <div>
                                <label htmlFor="confirmPassword">Confirmação da Senha</label>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <MdLock />
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirme a senha"
                                        {...register("confirmPassword")}
                                    />
                                </div>
                                {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
                            </div>

                            <Button title="Cadastrar" variant="secondary" type="submit" />
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
}

export { Form };
