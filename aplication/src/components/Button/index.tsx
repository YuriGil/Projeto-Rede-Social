import React from "react";
import { ButtonContainer } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ title, onClick, disabled, iconLeft }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {title}
      {iconLeft && <span>{iconLeft}</span>} {/* Renderiza o ícone à direita */}
    </ButtonContainer>
  );
};

export { Button };
