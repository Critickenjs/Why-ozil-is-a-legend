import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./signup.css";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const storage = getStorage(); 

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Le mot de passe et la confirmation du mot de passe ne correspondent pas.");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (profilePicture) {
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(storageRef, profilePicture);
        
        const downloadURL = await getDownloadURL(storageRef);
        
        await updateProfile(user, {
          displayName: username,
          photoURL: downloadURL,
        });
      } else {
        await updateProfile(user, {
          displayName: username,
        });
      }
  
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 800) {
      document.body.style.backgroundImage = `url(${"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0819fc5420faca2a/60daf995d9a5243b6699d504/f4223ea9712c9372162b7177a2984eaa71582390.jpg?auto=webp&format=pjpg&width=3840&quality=60"})`;
    } else {
      document.body.style.backgroundImage = `url(${"https://w0.peakpx.com/wallpaper/432/50/HD-wallpaper-mesut-ozil-football-futbol-player.jpg"})`;
    }
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.fontFamily = "sans-serif";
  }, [windowWidth]);

  return (
    <div className="login-container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <br />
        <label>Pseudo:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <br />
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
       
        <br />
        <label>
          Confirmer le mot de passe:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <br />
        <label>
          Photo de profil:
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </label>
        <br />

        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default Signup;
