import React from "react";
import { SidebarContainer, MenuItem, Profile } from "./styles";

const Sidebar = () => (
  <SidebarContainer>
    <Profile>
      <div>FT</div>
      <span>Nome de Usuário</span>
    </Profile>
    <MenuItem>Vídeos</MenuItem>
    <MenuItem>Portfólio</MenuItem>
    <MenuItem>Fotos</MenuItem>
    <MenuItem>Mais</MenuItem>
    <MenuItem>Opção</MenuItem>
  </SidebarContainer>
);

export default Sidebar;
