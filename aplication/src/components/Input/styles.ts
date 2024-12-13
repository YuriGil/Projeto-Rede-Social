import styled from "styled-components"

export const InputContainer = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center; 
  position: relative; 
`;
export const IconContainer = styled.div`
  position: absolute; /* Define posição fixa em relação ao container */
  left: 10px; /* Espaçamento do lado esquerdo */
  display: flex;
  align-items: center; /* Centraliza verticalmente o ícone */
  justify-content: center;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #000;
  border: 0;
  height: 5vh;
  width: 100vw;
  border-radius:5px;
  padding-left: 25px;
  text-align: left; /* Alinhamento do texto à esquerda */
`;



export const ErrorText = styled.p`
    color:#fff000;
    font-size:12px;
`


export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Alinha o ícone e o texto */
  background-color: #f1f3f4;
  border-radius: 25px;
  padding: 0 16px;
  height: 40px;
  max-width: 600px;
  width: 100%;
  position: relative;

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    color: #202124;
    text-align: left; /* Texto alinhado à esquerda */
  }

  svg {
    font-size: 20px;
    color: #5f6368;
    margin-right: 8px; /* Espaço entre a lupa e o texto */
  }
`;


