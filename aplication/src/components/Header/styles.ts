import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e5d5e8;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #ccc;
  z-index: 1000;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: 1rem;

  h1 {
    font-size: 20px;
    font-family: 'Monospace, Courier New';
    position: absolute;
    right: 13rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #000;
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin: 1rem;
`;
