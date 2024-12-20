import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/AuthContext";
import { useForm } from "react-hook-form";
import { MdSearch, MdSettingsSuggest, MdClear } from "react-icons/md";
import capivaraLogo from "../../assets/capivaraLogo.png";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
//import { Button } from "../Button";
import { 
  Container, 
  MenuContainer, 
  Logo, 
  MenuContent,
  InputWrapper, 
  HeadContainer,
  Title,
  TitleHighLight,
} from "./styles";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { control } = useForm();
  const { autenticado, logout } = useContext(AuthContext); // Usa o AuthContext
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
                  <HeadContainer>
              <Logo src={capivaraLogo} alt="site logo" onClick={() => navigate("/")} />
              <Title>
                <TitleHighLight>
                  Application
                  <br />
                </TitleHighLight>
                BETA
              </Title>
            
                      </HeadContainer>  
      <InputWrapper>
        <MdSearch />
        <Input
          name="Search"
          placeholder="Search"
          control={control}
        />
      </InputWrapper>
        <button className="menu-button" onClick={toggleMenu}>
    {isMenuOpen ? <MdClear /> : <MdSettingsSuggest />}
  </button>
      <MenuContainer>
        {autenticado ? (
          <button 
            title="Sair" 
            onClick={logout} 
            className="logout-button"
          >Sair</button>
        ) : (
          <button onClick={() => navigate("/login")}>
            Entrar
          </button>
        )}
      </MenuContainer>
      {isMenuOpen && (
        <MenuContent>
          <ul onClick={toggleMenu}> {/* Transforma a ul em botão */}
            <li onClick={() => navigate("/form")}>CADASTRE-SE</li>
            <li onClick={() => navigate("/login")}>ENTRAR</li>
            <li onClick={() => navigate("#")}>CURRÍCULO</li>
            <li onClick={() => navigate("#")}>PORTFÓLIO</li>
            <li onClick={() => navigate("#")}>GITHUB</li>
            <li onClick={() => navigate("#")}>SOBRE</li>
          </ul>
        </MenuContent>
      )}
    </Container>
  );
};

export { Header };
