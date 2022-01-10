import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styles";
import { useAuth, UserData } from "../../providers/Auth";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Digite um email")
      .email("Digite um email válido"),
    password: yup.string().required("Digite sua senha"),
    /* .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Digite ao menos 8 caracteres, com pelo menos 1 número, 1 letra e 1 caractere especial"
      ) */
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { signIn } = useAuth();

  const history = useHistory<any>();
  console.log(history);

  const onSubmitFunction = (data: UserData) => {
    signIn(data, history);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="password" placeholder="Senha" {...register("password")} />
      <p>{errors.password?.message}</p>
      <button type="submit">Entrar</button>
    </Container>
  );
};

export default Login;
