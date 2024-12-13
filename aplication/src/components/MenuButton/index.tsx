import React from "react";
import { MenuButtonContainer } from "./styles";
import { IButton } from "../Button/types";



const MenuButton: React.FC<IButton> = ({ title, onClick, disabled, iconLeft }) => {
  return (
    <MenuButtonContainer onClick={onClick} disabled={disabled}>
      {title}
      {iconLeft && <span>{iconLeft}</span>}
    </MenuButtonContainer>
  );
};

export { MenuButton };
