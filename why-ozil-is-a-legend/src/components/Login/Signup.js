import React, { useState, useEffect } from 'react';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./signup.css";


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

    

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
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
        <div className="login-container">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
            </label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            <br />
            <label>
                Mot de passe:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Créer</button>
        </form>
    </div>
    );
};

export default Signup;
