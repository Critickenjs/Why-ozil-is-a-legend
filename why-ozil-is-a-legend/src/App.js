import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Carriere from "./pages/Carriere";
import ozilvideo from './rss/img/ozil.mp4';
import './styles/styles.css'


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/carriere" element={<Carriere />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App; 