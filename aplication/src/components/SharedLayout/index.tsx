import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import logo from "../../assets/capivaraLogo.png";
import { SharedLayoutProps } from "./types";
import {
  Container,
  MenuContainer,
  Row,
  UserPicture,
  Logo,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "./styles";

const SharedLayout: React.FC<SharedLayoutProps> = ({ isHeader }) => {
  const { control } = useForm();
  const { autenticado, usuario, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container>
      <Row>
        <Logo src={logo} alt="site logo" onClick={() => navigate("/")} />
        {isHeader && autenticado ? (
          <MenuContainer>
            <Input
              name="search"
              placeholder="Buscar..."
              leftIcon={<FaSearch />}
              control={control}
            />
          </MenuContainer>
        ) : (
          <MenuContainer>
            <h1>Aplication Beta</h1>
            <Button title="Entrar" onClick={() => navigate("/login")} />
            <Button title="Cadastrar" onClick={() => navigate("/form")} />
          </MenuContainer>
        )}
      </Row>
      {isHeader && autenticado && (
        <Row>
          {usuario && <UserPicture src={logo} alt={usuario.nome} />}
          <Dropdown>
            <Button
              title=""
              onClick={toggleDropdown}
              iconLeft={<FaEllipsisV />}
            />
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={() => navigate("/settings")}>
                  Configurações
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>Sair</DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>
        </Row>
      )}
    </Container>
  );
};

export default SharedLayout;
