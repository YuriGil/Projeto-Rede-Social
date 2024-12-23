import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo, Title, TitleHighLight, Divider, HeadContainer } from "./styles";
import capivaraLogo from "../../assets/capivaraLogo.png";

const LogoHeader = () => {
  const navigate = useNavigate();
  return (
    <HeadContainer>
      <Logo src={capivaraLogo} alt="site logo" onClick={() => navigate("/")} />
      <Title>
        <TitleHighLight>
          Application
          <br />
        </TitleHighLight>
        BETA
      </Title>
      <Divider />
    </HeadContainer>
  );
};

export default LogoHeader;
