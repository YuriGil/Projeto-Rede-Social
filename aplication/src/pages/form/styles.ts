// form/styles.ts

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 85vh;
  margin: 0 auto;
  font-family: 'Monospace, Courier New';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
  }
`;


export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media (min-width: 768px) {
    align-items: flex-start;
    padding: 2rem;
  }
`;

export const Right = styled.div`
  flex1:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media (min-width: 768px) {
    margin-top: 5rem;
    align-items: flex-start;
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-family: 'Monospace, Courier New';
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const TitleHighLight = styled.span`
  color: #41354e;
`;

export const TextContent = styled.p`
  font-size: 18px;
  margin-bottom: 1rem;
  color: #666;
  text-align: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 1rem;

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

  @media (min-width: 768px) {
    left: 50%;
    width: 51rem;
    height: 49rem;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  width: 100%;
  opacity: 0.5;
`;

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
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