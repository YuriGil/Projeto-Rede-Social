import React from "react";
import { PostCardContainer, Header, Content } from "./styles";

const PostCard = () => (
  <PostCardContainer>
    <Header>
      <div className="avatar">FT</div>
      <div>
        <span>Nome de Usuário</span>
        <small>2h atrás</small>
      </div>
    </Header>
    <Content>
      <p>Este é o conteúdo de um post.</p>
    </Content>
  </PostCardContainer>
);

export default PostCard;
