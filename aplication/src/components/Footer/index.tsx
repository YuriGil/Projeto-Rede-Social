import React from "react";
import { Container, Content, Options, Logo, InfoContainer } from "./styles";
import logo from "../../assets/capivaraLogo.png";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Logo src={logo} alt="site logo" onClick={() => navigate("/")} />
        <InfoContainer>
          <Options>
            | <a title="Cadastrar" onClick={() => navigate("/form")}  >CADASTRE-SE</a> 
            | <a title="Entrar" onClick={() => navigate("/login")}  >ENTRAR</a>  
            | <a title="Curriculo" onClick={() => navigate("#")}  >CURRICULO</a>  
            | <a title="Portifolio" onClick={() => navigate("#")}  >PORTIFOLIO</a>  
            | <a title="GitHub" onClick={() => navigate("#")}  >GITHUB</a>  
            | <a title="Sobre" onClick={() => navigate("#")}  >SOBRE</a> 
            |
          </Options>
          <span>&copy; 2024 - Aplicativo Beta</span>
        </InfoContainer>
      </Content>
    </Container>
  );
};

export { Footer };
