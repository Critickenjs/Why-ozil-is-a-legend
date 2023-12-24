import React, { useState } from 'react';
import './login.css';
import Header from '../header/header';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            <Header />
        
            <div className="login-container">
                <div className="login-image">
                <h2>Login</h2>
                </div>
                <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange} />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange} />
                    <button type="submit">Login</button>
                    
                </form>
                </div>
            </div></>
    );
};

export default Login;
