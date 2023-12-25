import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./signup.css";
import Signup from "./Signup";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href = "/Accueil";        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Gérer les changements de taille de la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Modifier le style du corps en fonction de la résolution
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
    <>
      <div className="login-container">
        <div className="login-image">
          <h2>Connection</h2>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="register-link">
          Vous n'avez pas de compte ?{" "}
          <Link to="/signup">Inscrivez-vous ici</Link>.
        </div>
      </div>
    </>
  );
};

export default Login;
