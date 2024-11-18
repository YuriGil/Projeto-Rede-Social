import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import bannerImage from '../../assets/github-mark.svg'
import { Button  } from "../../components/Button";
import { Card } from "../../components/Cards";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighLight } from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
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
                <UserInfo percentual={89} nome="Yuri gil" image="../../assets/github-mark.svg"/>
                <UserInfo percentual={89} nome="Yuri gil" image="../../assets/github-mark.svg"/>
                <UserInfo percentual={89} nome="Yuri gil" image="../../assets/github-mark.svg"/>
                <UserInfo percentual={89} nome="Yuri gil" image="../../assets/github-mark.svg"/>
                <UserInfo percentual={89} nome="Yuri gil" image="../../assets/github-mark.svg"/>
            </Column>
        </Container>
    </>)
}

export { Feed }