import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Cards";
import { UserInfo } from "../../components/UserInfo";
import { AuthContext } from "../../components/AuthContext";
import { Container, Column, TitleHighLight, Content } from "./styles";

const Feed = () => {
  const { autenticado, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <p>Carregando...</p>; // Indicador de carregamento
  }

  if (!autenticado) {
    navigate("/login");
    return null;
  }

  return (
    <Container>
      <Content>
        <Column flex={3}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># TOP QUALQUER COISA</TitleHighLight>
          <UserInfo percentual={89} nome="Yuri Gil" image="../../assets/github-mark.svg" />
          <UserInfo percentual={80} nome="João Silva" image="../../assets/github-mark.svg" />
          <UserInfo percentual={70} nome="Maria Clara" image="../../assets/github-mark.svg" />
        </Column>
      </Content>
    </Container>
  );
};

export { Feed };
