// feed/styles.ts
import styled from "styled-components";
import { IColumn } from "../../pages/feed/types";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  font-family: 'Monospace, Courier New';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f7f7;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const Title = styled.h3`
  font-family: 'Monospace, Courier New';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #41354e;
  margin-bottom: 24px;
`;

export const TitleHighLight = styled.h3`
  font-family: 'Monospace, Courier New';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #f41050;
  margin-bottom: 16px;
`;

export const Column = styled.div<IColumn>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;
