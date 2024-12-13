import styled from "styled-components";



export const Container = styled.div`
width: 100%;
height: auto;
border-bottom: solid 1px #ccc;
border-radius: 10px;
display: flex;
flex-direction: row;
align-items: center;
background-color:#e5d5e8;

@media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  }
  `;

  export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: 1rem;

  @media (min-width: 768px) {
    gap: 16px; /* Espaçamento maior para telas maiores */
  }

  h1 {
    font-size: 20px;
    font-family: 'Monospace, Courier New';
    position: absolute;
    right:13rem;
    }
`;


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:last-child {
    justify-content: flex-end; /* Alinha os elementos na última linha */
  }
`;

export const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #000;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin:1rem;
  }
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin: 1rem;
  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    margin: 2rem;
  }
`;

export const MenuLink = styled.a`
  font-family: "Open Sans";
  font-size: 14px;
  color: #202124;
  margin-right: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 150px;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  color: #000;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #f5f5f5;
  }
`;
