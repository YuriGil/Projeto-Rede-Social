import styled from "styled-components";
import { IColumn } from "../../pages/feed/types";

export const Container = styled.main`
  width: 100%;
  height: 85vh;
  margin: 0 auto;
  font-family: 'Monospace, Courier New';
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  position: relative;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25); 
  }

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;  
  }
`;

export const Title = styled.h3`
  font-family: 'Monospace, Courier New';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #41354e;
  margin-left: 1rem;
`;

export const TitleHighLight = styled.span`
  color: #f41050;
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

export const Column = styled.div<IColumn>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: #41354e;
  color: #fff;
  font-size: 14px;
`;