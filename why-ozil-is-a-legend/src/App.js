import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Carriere from "./pages/Carriere";
import Login from "./components/Login/login";
import Signup from "./components/Login/Signup";
import './styles/styles.css'


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/carriere" element={<Carriere />} />
        <Route path="*" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App; 