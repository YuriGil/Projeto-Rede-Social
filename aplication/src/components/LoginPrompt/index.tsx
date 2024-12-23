import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TextContent } from "./styles";

const LoginPrompt = () => {
  const navigate = useNavigate();
  return (
    <>
      <TextContent>Já tem uma conta? Faça o Login</TextContent>
      <Button title="Login" onClick={() => navigate("/login")} />
    </>
  );
};

export default LoginPrompt;
