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
  loading: boolean;
  login: (email: string, senha: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      const usuarioParseado = JSON.parse(usuarioSalvo) as User;
      setUsuario(usuarioParseado);
      setAutenticado(true);
    }
    setLoading(false); // Finaliza o estado de carregamento
  }, []);

  const login = async (email: string, senha: string): Promise<boolean> => {
    try {
      const response = await axios.get("http://localhost:3001/users");

      const usuarioValido = response.data.find(
        (user: any) =>
          user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          user.password.trim() === senha.trim()
      );

      if (usuarioValido) {
        setUsuario(usuarioValido as User);
        setAutenticado(true);
        localStorage.setItem("usuario", JSON.stringify(usuarioValido));
        return true;
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
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
