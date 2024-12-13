import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Form } from "./pages/form";
import { AuthContext } from "./components/AuthContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Recovery } from "./pages/recovery"

const App: React.FC = () => {
  const { autenticado } = useContext(AuthContext);

  return (
    <Router>
      {autenticado && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/form" element={<Form />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
      {!autenticado && <Footer />}
    </Router>
  );
};

export default App;
