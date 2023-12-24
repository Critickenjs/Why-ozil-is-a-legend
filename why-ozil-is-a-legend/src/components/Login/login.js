import React, { useState } from "react";
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
          <a href="inscription.html">Inscrivez-vous ici</a>.
        </div>
      </div>
    </>
  );
};

export default Login;
