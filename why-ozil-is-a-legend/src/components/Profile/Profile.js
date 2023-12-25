// Importations nécessaires
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  getCurrentUser } from "../../authService"; // Assurez-vous d'importer les fonctions nécessaires
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

// Composant de la page de profil
const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        // Gérer les erreurs de récupération de l'utilisateur
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        // Rediriger vers la page de connexion en cas d'erreur
        navigate("/login");
      }
    };

    fetchCurrentUser();
  }, [navigate]);

  const handleSignOut = () => {
    signOut(auth)
    setCurrentUser(null);
    console.log("Déconnexion réussie");
    navigate("/");
       
};

  if (!currentUser) {
    // Afficher un message de chargement ou rediriger vers la page de connexion
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <h2>Profil de {currentUser.displayName}</h2>
      <div>
        <strong>Nom d'utilisateur:</strong> {currentUser.displayName}
      </div>
      <div>
        <strong>Email:</strong> {currentUser.email}
      </div>
      {/* Ajoutez d'autres informations de profil si nécessaire */}
      <button onClick={handleSignOut}>Déconnexion</button>
    </div>
  );
};

export default Profile;
