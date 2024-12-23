import styled from "styled-components";

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
