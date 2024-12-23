import styled from "styled-components";

export const Left = styled.div`
  flex: 1;
  order: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    order: 0;
    width: 50%;
    padding: 2rem;
    max-width: 700px;
  }

  Button {
    width: 80%;
  }
`;
