import React from "react";
import { Title, TitleHighLight, Logo, HeadContainerStyled } from "../../pages/home/styles";
import capivaraLogo from "../../assets/capivaraLogo.png";
import { useNavigate } from "react-router-dom";

const HeadContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HeadContainerStyled>
      <Logo src={capivaraLogo} alt="site logo" onClick={() => navigate("/")} />
      <Title>
        <TitleHighLight>
          Application
          <br />
        </TitleHighLight>
        BETA
      </Title>
    </HeadContainerStyled>
  );
};

export { HeadContainer };
