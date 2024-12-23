
import React, { useContext } from "react";
import Sidebar from "../../components/SideBar";
import Stories from "../../components/Stories";
import PostInput from "../../components/PostInput";
import Options from "../../components/Options";
import PostCard from "../../components/Cards";
import Advertisement from "../../components/Advertisement";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  SidebarRight,
  MainContent,
  BannerImage,
  Title,
  TitleHighLight,
  Divider
} from "./styles";
import { AuthContext } from "../../components/AuthContext";
import capivaraLogo from "../../assets/capivaraLogo.png";

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
        <Sidebar />
        <MainContent>
          <Title>
            <TitleHighLight>Feed</TitleHighLight>
          </Title>
          <Stories />
          <PostInput />
          <Options />
          <PostCard />
          <PostCard />
        </MainContent>
        <SidebarRight>
          <Advertisement />
          <Advertisement />
        </SidebarRight>
      </Content>
      <BannerImage img={capivaraLogo} />
    </Container>
  );
};
export { Feed };