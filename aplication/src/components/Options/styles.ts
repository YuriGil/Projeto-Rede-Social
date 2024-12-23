import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 8px;
  border-radius: 8px;
`;

export const Option = styled.div`
  padding: 8px 16px;
  background-color: #fff0ff;
  border-radius: 4px;
  cursor: pointer;
  color: #41354e;
  font-family: 'Monospace, Courier New';

  &:hover {
    background-color: #b2a3bc;
    color: #fff0ff;
  }
`;
