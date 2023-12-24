import React, { useEffect, useState } from "react";
import backgroundImage from '../../rss/img/ozil-arsenal.jpg';
import "./login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    if (windowWidth > 600) {
      document.body.style.backgroundImage = `url(${"https://www.newarab.com/sites/default/files/styles/large_16_9/public/media/images/74B4FA0C-C3D5-454B-BB71-826753ACF58F.jpg?h=d1cb525d&itok=xj4woKUS"})`;
    } else {
      document.body.style.backgroundImage = `url(${"https://w0.peakpx.com/wallpaper/432/50/HD-wallpaper-mesut-ozil-football-futbol-player.jpg"})`;
    }
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    // Assurez-vous de rétablir l'état d'origine lors du démontage du composant
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundSize = '';
    };
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
        <div class="register-link">
          Vous n'avez pas de compte ?{" "}
          <a href="/signup">Inscrivez-vous ici</a>.
        </div>
      </div>
    </>
  );
};

export default Login;
