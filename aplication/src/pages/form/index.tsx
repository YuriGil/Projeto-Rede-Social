import React from "react";
import LeftSection from "../../components/LeftSectionForm";
import RightSection from "../../components/RightSectionForm";
import { Container, Content, BannerImage } from "./styles";
import capivaraLogo from "../../assets/capivaraLogo.png";

const Form = () => (
  <Container>
    <Content>
      <LeftSection />
      <RightSection />
    </Content>
    <BannerImage img={capivaraLogo} />
  </Container>
);

export { Form };
