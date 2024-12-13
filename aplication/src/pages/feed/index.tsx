//import { Button } from "../../components/Button";
import { Card } from "../../components/Cards";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighLight, Content } from "./styles";

const Feed = () => {
  return (
    <Container>
      <Content>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># TOP QUALQUER COISA</TitleHighLight>
          <UserInfo percentual={89} nome="Yuri Gil" image="../../assets/github-mark.svg" />
          <UserInfo percentual={89} nome="Yuri Gil" image="../../assets/github-mark.svg" />
          <UserInfo percentual={89} nome="Yuri Gil" image="../../assets/github-mark.svg" />
          <UserInfo percentual={89} nome="Yuri Gil" image="../../assets/github-mark.svg" />
          <UserInfo percentual={89} nome="Yuri Gil" image="../../assets/github-mark.svg" />
        </Column>
      </Content>
    </Container>
  );
};

export { Feed };