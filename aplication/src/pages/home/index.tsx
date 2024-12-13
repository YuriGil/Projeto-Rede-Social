import React from "react";
import { useNavigate } from "react-router-dom";
import capivaraLogo from "../../assets/capivaraLogo.png";
import { Button } from "../../components/Button";
import {
  Container,
  Content,
  TextContent,
  Title,
  TitleHighLight,
  BannerImage,
  ButtonGroup,
  LoginSocial, 
  Logo,
  HeadContainer
} from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Container>
        <Content>
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
          <TextContent>
            Conecte-se e compartilhe com as pessoas que fazem parte da sua vida
          </TextContent>

          <ButtonGroup> 
          <LoginSocial>
          <span 
          className="material-symbols-outlined"
          onClick={() => navigate("/form")}
          >public
            </span>

              Inscreva-se com Qualquer Rede Social
              
          </LoginSocial>

          <a>OU</a>

            <Button 
            title="CADASTRE-SE" 
            onClick={() => navigate("/form")} 
            />
            <hr />
            <Button
              title="ENTRAR"
              variant="secondery"
              onClick={handleClickSignIn}
            />
            
           
          </ButtonGroup>
        </Content>
        <BannerImage img={capivaraLogo} />
      </Container>
    </>
  );
};

export { Home };
