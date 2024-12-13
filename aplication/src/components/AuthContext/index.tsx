import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  nome: string;
  email: string;
}

interface AuthContextProps {
  autenticado: boolean;
  usuario: User | null;
  login: (email: string, senha: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState<User | null>(null);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    console.log("Verificando usuário salvo...");
    if (usuarioSalvo) {
      const usuarioParseado = JSON.parse(usuarioSalvo) as User;
      setUsuario(usuarioParseado);
      setAutenticado(true);
      console.log("Usuário autenticado:", usuarioParseado);
    } else {
      console.log("Nenhum usuário salvo.");
    }
  }, []);

  const login = async (email: string, senha: string): Promise<boolean> => {
    try {
      const response = await axios.get("http://localhost:3001/users");
  
      if (!Array.isArray(response.data)) {
        console.error("A API não retornou um array:", response.data);
        return false;
      }
  
      console.log("Dados retornados pela API:", response.data);
  
      const usuarioValido = response.data.find((user: any) => {
        if (!user.email || !user.password) {
          console.warn("Usuário com campos ausentes:", user);
          return false;
        }
        return (
          user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          user.password.trim() === senha.trim()
        );
      });
  
      if (usuarioValido) {
        setUsuario(usuarioValido as User);
        setAutenticado(true);
        localStorage.setItem("usuario", JSON.stringify(usuarioValido));
        console.log("Login bem-sucedido:", usuarioValido);
        return true;
      } else {
        console.warn("Usuário ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
    return false;
  };
  
  
  
  const logout = () => {
    setAutenticado(false);
    setUsuario(null);
    localStorage.removeItem("usuario");
    console.log("Logout realizado.");
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
