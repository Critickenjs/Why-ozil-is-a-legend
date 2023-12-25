import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Carriere from "./pages/Carriere";
import Login from "./components/Login/login";
import Signup from "./components/Login/Signup";
import Profile from "./components/Profile/Profile";
import React, { useEffect, useState } from "react";
import { listenToAuthChanges } from "./authService";



import './styles/styles.css'


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Écouter les changements d'état d'authentification
    const unsubscribe = listenToAuthChanges((user) => {
      setCurrentUser(user);
    });

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      unsubscribe();
    };
  }, []);
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/carriere" element={<Carriere />} />
        <Route path="*" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App; 