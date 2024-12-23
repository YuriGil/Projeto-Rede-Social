import styled from "styled-components";

export const Right = styled.div`
  flex: 1;
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1rem;
    width: 50%;
    order: 0;
  }
`;

export const FormWrapper = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    // Espaço reservado para ajustes adicionais
  }
`;
