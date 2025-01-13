import React from "react";
import FormSection from "../../components/FormSection";
import LogoHeader from "../../components/LogoHeaderForm";  
import LoginPrompt from "../../components/LoginPrompt";
import { Container, Content, BannerImage, Divider, Left, Right } from "./styles";
import capivaraLogo from "../../assets/capivaraLogo.png";

const Form = () => (
  <Container>
    <Content>
      <Left>  
      <Divider/>
      <LogoHeader />
      <LoginPrompt />
      </Left>
      <Right>
      <FormSection />
      </Right>
    </Content>
    <BannerImage img={capivaraLogo} />
  </Container>
);

export { Form };
