import React from "react";
import { FiThumbsUp } from 'react-icons/fi';


import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="#"/>
            <Content>
                <UserInfo>
                    <UserPicture src="#"/>
                    <div>
                        <h4>Yuri Gil</h4>
                        <p>Teste 66 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso React</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Numquam</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p><FiThumbsUp/>16</p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };