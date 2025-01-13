import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "../../components/ButtonGroupHome";
import { HeadContainer } from "../../components/HeadContainer";
import { Banner } from "../../components/Banner";
import { Container, Content, TextContent } from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Content>
        <HeadContainer/>
        <TextContent>
          Conecte-se e compartilhe com as pessoas que fazem parte da sua vida
        </TextContent>
        <ButtonGroup handleClickSignIn={handleClickSignIn} />
      </Content>
      <Banner />
    </Container>
  );
};

export { Home };
