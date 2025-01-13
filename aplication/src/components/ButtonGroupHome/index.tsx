import React from "react";
import { Button } from "../Button";
import { LoginSocial, Divider, ButtonGroupStyled } from "../../pages/home/styles";
import { useNavigate } from "react-router-dom";

interface ButtonGroupProps {
  handleClickSignIn: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ handleClickSignIn }) => {
  const navigate = useNavigate();

  return (
    <ButtonGroupStyled>
      <LoginSocial
        onClick={() => navigate("/form")}
      >
        <span className="material-symbols-outlined">public</span>
        Inscreva-se com Qualquer Rede Social
      </LoginSocial>

      <span>OU</span>

      <Button 
        title="CADASTRE-SE" 
        onClick={() => navigate("/form")} 
      />
      <Divider />
      <Button
        title="ENTRAR"
        variant="secondary"
        onClick={handleClickSignIn}
      />
  </ButtonGroupStyled>
  );
};

export { ButtonGroup };
