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
    return <div className="d-flex align-items-center justify-content-center vh-100">
    <div className="spinner-border text-dark" role="status">
      <span className="visually-hidden">Chargement...</span>
    </div>
  </div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>Profil de {currentUser.displayName}</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Email :</strong> {currentUser.email}
              </div>
              <div className="mb-3">
                <strong>Nom d'utilisateur :</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                ) : (
                  <span>{currentUser.displayName}</span>
                )}
              </div>
              <div className="mb-3">
                <strong>URL de la photo :</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    value={newPhotoURL}
                    onChange={(e) => setNewPhotoURL(e.target.value)}
                  />
                ) : (
                  <img
                    src={currentUser.photoURL || 'URL_PAR_DEFAUT_SI_AUCUNE_PHOTO'}
                    alt="User Avatar"
                    className="img-fluid rounded-circle custom-img"
                  />
                )}
              </div>
              <button
                className="btn btn-primary mr-2"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Annuler" : "Modifier le profil"}
              </button>
              {isEditing && (
                <button
                  className="btn btn-success"
                  onClick={handleUpdateUsername}
                >
                  Enregistrer les modifications
                </button>
              )}
              <button
                className="btn btn-danger float-end"
                onClick={handleSignOut}
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;