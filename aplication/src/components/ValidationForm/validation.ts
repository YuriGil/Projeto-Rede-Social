import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup.string().required("O campo é obrigatório."),
  userName: yup.string().required("O campo é obrigatório."),
  idade: yup.number().required("O campo é obrigatório.").positive("O campo deve ser positivo.").integer("O campo deve ser um número inteiro."),
  phNumber: yup.string().required("O campo é obrigatório."),
  email: yup.string().email("E-mail inválido.").required("O campo é obrigatório."),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("O campo é obrigatório."),
  confirmPassword: yup.string().oneOf([yup.ref("password"), undefined], "As senhas devem coincidir").required("Confirmação de senha é obrigatória."),
});
