import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../authService";
import { auth } from "../../Firebase";
import { signOut, updateProfile } from "firebase/auth";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newPhotoURL, setNewPhotoURL] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        navigate("/login");
      }
    };

    fetchCurrentUser();
  }, [navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        console.log("Déconnexion réussie");
        navigate("/");
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  };

  const handleUpdateUsername = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error("Utilisateur non authentifié.");
        return;
      }

      const currentUsername = user.displayName || "";

      if (currentUsername !== newUsername || newPhotoURL) {
        const updateObject = {};

        if (currentUsername !== newUsername) {
          updateObject.displayName = newUsername;
        }

        if (newPhotoURL) {
          updateObject.photoURL = newPhotoURL;
        }

        await updateProfile(user, updateObject);

        setCurrentUser({ ...currentUser, displayName: newUsername, photoURL: newPhotoURL });
      }

      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
    }
  };

  if (!currentUser) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <h2>Profil de {currentUser.displayName}</h2>
      <div>
        <strong>Nom d'utilisateur:</strong>{" "}
        {isEditing ? (
          <input
            type="text"
            placeholder= "currentUser.displayName"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        ) : (
          currentUser.displayName
        )}
      </div>
      <div>
        <strong>Email:</strong> {currentUser.email}
      </div>
      <div>
        <strong>Photo de profil:</strong>{" "}
        {currentUser.photoURL ? (
          <img src={currentUser.photoURL} alt="Profile" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        ) : (
          <p>Aucune photo de profil</p>
        )}
      </div>
      <div>
        <strong>Nouvelle photo de profil URL:</strong>{" "}
        {isEditing ? (
          <input
            type="text"
            value={newPhotoURL}
            onChange={(e) => setNewPhotoURL(e.target.value)}
          />
        ) : (
          newPhotoURL || "Aucune nouvelle photo"
        )}
      </div>
      {isEditing ? (
        <button onClick={handleUpdateUsername}>Enregistrer</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Modifier le profil</button>
      )}
      <button onClick={handleSignOut}>Déconnexion</button>
    </div>
  );
};

export default Profile;
