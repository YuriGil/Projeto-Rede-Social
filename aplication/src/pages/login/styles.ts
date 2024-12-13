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
  
  Input {
    align-items:center;
    width: 60vw;
    margin: auto;
   
  } 
  
  Form {
    width:80vw;
  }

  Button {
    align-items:center;
    width:80vw;
    margin: auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;


    Button {
    align-items:center;
    width:100%;
    margin:0;
    margin-top:2rem;
  }
    Input {
    width:100%;
    margin:0;
  }
    Form {
    width:100%;
  }
`;
export const InputWrapper = styled.div`
  margin-bottom:2rem;
  display: flex;
  align-items: center;
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
    font-family: "Monospace, Courier New";
    background: none;
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  width:100%;
  padding: 1rem;
  margin:1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row; /* Monitores: elementos lado a lado */
    justify-content: space-between;
    align-items: stretch;
    width:60%;
    margin: 8rem;

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
  font-family: "Monospace, Courier New";
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const TitleHighLight = styled.span`
  color: #41354e;
`;

export const TextContent = styled.p`
  font-size: 18px;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column; /* Lado a lado em telas maiores */
  gap: 1rem;
  justify-content: space-between;

  button {
    flex: 1;
    height: 3rem;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    flex-direction: column; /* Empilhados no mobile */
    align-items: center;
    width: 100%;
  }
`;

export const BannerImage = styled.div<{ img: string }>`
  position: absolute;
  bottom: 11%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
  width: 40rem;
  height: 40rem;
  opacity: 0.05;

  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    width: 51rem;
    height: 49rem;
    bottom: 0;
  }
`;
export const Divider = styled.div`
  background-color: #41354e;

  opacity: 0.25;

  width: 100%;
  height: 1px;
  margin: 3rem 0;

  @media (min-width: 768px) {
    width: 1px;
    height: 100%; 
    align-self: stretch; 
  }
`;
export const Divider2 = styled.div`
    width: 1px;
    height: 100%; 
    align-self: stretch;   
  
@media (min-width: 768px) {
   background-color: #41354e;
   opacity: 0.25;
   width: 100%;
   height: 1px;
   margin-top:2rem;
  }
`;


export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25); 
  }

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;


export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
