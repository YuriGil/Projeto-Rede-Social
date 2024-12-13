import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 12%; 
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #e5d5e8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px #ccc;
  z-index: 1000;
  box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1); 
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
  flex: 1; 
  padding: 0 20px; 
  

  @media (min-width: 768px) {
    align-items: center; 
  }
`;


export const Options = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: #202124;
  margin-bottom: 10px;

  a {
    font-size:14px;
    text-decoration: none;
    color: inherit;
    margin-right: 15px;
    cursor:pointer;
    padding-left:1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
