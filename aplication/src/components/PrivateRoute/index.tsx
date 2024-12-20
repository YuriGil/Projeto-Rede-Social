import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";

const PrivateRoute: React.FC = () => {
  const { autenticado, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return autenticado ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
