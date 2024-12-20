import styled from "styled-components";
import { BannerImage as SharedBannerImage } from "../home/styles";

export const Container = styled.main`
  width: 100%;
  height: 85vh;
  margin: 0 auto;
  font-family: 'Monospace, Courier New';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  form{
    width:100%;

    input{
      width:90%;
    }
    button{
      align-self:center;
    }
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 30%;
    padding: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 1rem;
  margin-left:1rem;
`;

export const TitleHighLight = styled.span`
  color: #41354e;
`;

export const TextContent = styled.p`
  font-size: 16px;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #fff;

  svg {
    margin: 0.5rem;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const BannerImage = styled(SharedBannerImage)``;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25); 
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;
export const Divider = styled.div`
  background-color: #41354e;

  opacity: 0.25;

  width: 100%;
  height: 1px;
  margin: 1rem 0;

  @media (min-width: 768px) {
    align-self: stretch; 
  }
`;