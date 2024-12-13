import styled from "styled-components";

export const MenuButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #4a00c8;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  span {
    display: flex;
    align-items: center;
  }

  
  svg {
    font-size: 20px;
    color:#000;
    margin-right: 8px; /* Espaço entre a lupa e o texto */
  }
`;
