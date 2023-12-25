import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../authService";
import { auth } from "../../Firebase";
import { signOut, updateProfile } from "firebase/auth";
import  "./profile.css"; 

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

        if (currentUsername !== newUsername && newUsername !== "" && newUsername !== currentUser.displayName) {
          updateObject.displayName = newUsername;
        }

        if (newPhotoURL && newPhotoURL !== currentUser.photoURL && newPhotoURL !== "") {
          updateObject.photoURL = newPhotoURL;
        }

        await updateProfile(user, updateObject);
        if(newPhotoURL !== currentUser.photoURL && newPhotoURL !== "" && newUsername !== currentUser.displayName && newUsername !== ""){ 
      }else{
        if (newUsername !== currentUser.displayName && newUsername !== "") {
          setCurrentUser({ ...currentUser, displayName: newUsername });
        }else if(newPhotoURL !== currentUser.photoURL && newPhotoURL !== ""){
          setCurrentUser({ ...currentUser, photoURL: newPhotoURL });
        }

      }
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
    <div className="profile-container"> 
      <div className="profile-header-section"> 
        <h2>Profil de {currentUser.displayName}</h2>
      </div>
      <div className="profile-details"> 
        <div className="profile-details-item"> 
          <strong className="profile-details-label">Nom d'utilisateur:</strong>{" "}
          {isEditing ? (
            <input
              className="edit-input-field" 
              type="text"
              placeholder={currentUser.displayName}
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          ) : (
            currentUser.displayName
          )}
        </div>
      </div>
      <div className="profile-image-section"> 
        <strong className="profile-details-label">Photo de profil:</strong>{" "}
        {currentUser.photoURL ? (
          <img className="profile-image" src={currentUser.photoURL} alt="Profile" /> 
        ) : (
          <p>Aucune photo de profil</p>
        )}
      </div>
      <div className="edit-action-buttons"> 
        {isEditing ? (
          <button onClick={handleUpdateUsername}>Enregistrer</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Modifier le profil</button>
        )}
        <button onClick={handleSignOut}>Déconnexion</button>
      </div>
    </div>
  );
};

export default Profile;