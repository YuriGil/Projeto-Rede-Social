import styled from "styled-components";
export const Logo = styled.img`
  width: 3.5rem;
  max-width: 300px;
  height: 3.5rem;
  cursor: pointer;
  margin-right: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }

  @media (min-width: 768px) {
    width: 90%;
    height: 80%;
    opacity: 0.5;
  }
`;

export const Title = styled.h2`
  font-family: 'Monospace, Courier New';
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  align-self: center;
  margin-top: 2rem;
`;

export const TitleHighLight = styled.span`
  color: #41354e;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  width: 100%;
  opacity: 0.5;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
