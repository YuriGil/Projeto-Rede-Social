import styled from "styled-components";

export const PostInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 8px;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;
