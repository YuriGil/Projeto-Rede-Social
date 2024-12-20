import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
  padding: 12px 20px;
  width: 200px; 
  border: none;
  border-radius: 4px;
  background-color: #41354e;
  color: #fff0ff;
  cursor: pointer;
  position: relative; 

  &:hover {
    background-color: #cbbcd2;
    color: #41354e;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  span {
    display: flex;
    align-items: center;
  }
`;
