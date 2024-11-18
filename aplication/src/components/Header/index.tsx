import React from 'react'
import { Button } from "../Button"
import logo from "../../assets/github-mark.svg"

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Grapper,
    UserPicture
} from "./styles"
import { IHeader } from './types'

const Header = ({ autenticado } : IHeader) => {
    return (
        <Grapper>
            <Container>
                <Row>
                    <img src={logo} alt="site logo" />

                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu> Menu 1 </Menu>
                            <Menu> Menu 2 </Menu>
                        </>
                    ) : null}

                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src={logo} />
                    ) : (
                        <>
                        <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                        </>
                    )}
                    
                </Row>
            </Container>
        </Grapper>
    )
}

export { Header };