// form/styles.ts

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 88vh;
  margin: 0 auto;
  font-family: 'Monospace, Courier New';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  form{
    align-self: center;
    width:90%;
  }

  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column; /* Alinhamento vertical padrão */
  align-items: center;
  width: 100%;
  margin: 1rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row; /* Alterna para layout horizontal */
    justify-content: space-between;
    width: 60%;
    padding: 1rem;
  }
`;



export const Left = styled.div`
  flex: 1;
  order:2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:1rem;
  width:85%;

  Button{
  width:80%;
  margin:auto;
  
  }

  @media (min-width: 768px) {
    order:0;
    padding: 2rem;
    width:100%;
  }
  
`;

export const Right = styled.div`
  flex1:1;
  order:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:1rem;

  Button {
    margin:auto;
    width:80%;
  }
  
  @media (min-width: 768px) {
    padding: 1rem;
    order:0;
    width:50%;

  }

`;

export const Title = styled.h2`
  font-family: 'Monospace, Courier New';
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  align-self: center;
  margin-top: 2rem;
`;

export const TitleHighLight = styled.span`
  color: #41354e;
`;

export const TextContent = styled.p`
  font-size: 22px;
  margin-bottom: 1rem;
  color: #666;
  text-align: center;
`;

export const FormWrapper = styled.div`
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
  width: 80%;

  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: #fff;

  svg {
    margin-right: 0.5rem;
    color: #666;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    background: none;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BannerImage = styled.div<{ img: string }>`
  position: absolute;
  bottom: 11%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 40rem;
  height: 40rem;
  opacity: 0.05;
  z-index:-1;

  @media (min-width: 768px) {
    left: 50%;
    width: 51rem;
    height: 49rem;
  }
`;

export const Divider = styled.div`
  background-color: #41354e;
  opacity: 0.25;
  width: 100%;
  height: 1px;
  margin: 1rem 0;

  @media (min-width: 768px) {
    height: auto; /* Ajusta o tamanho da altura */
    width: 1px; /* Linha vertical entre Left e Right */
    margin: 0; /* Remove margens verticais */
    align-self: center; /* Centraliza a linha vertical */
  }
`;


export const Logo = styled.img`
  width: 3.5rem;
  max-width: 300px;
  height: 3.5rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25); 
  }

  @media (min-width: 768px) {
   width: 90%;
   height: 80%;
   opacity:0.5;
  }
`;
export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

   @media (min-width: 768px) {
      flex-direction:column;
  }
`;
