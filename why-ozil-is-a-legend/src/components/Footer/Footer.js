// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <a>Yliess El atifi</a>
            <a
                href="https://github.com/Critickenjs"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                    style={githubBtnStyle}
                />
            </a>
            
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '5px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    spaceBetween: '10px',
    color: 'Black',
};

const githubBtnStyle = {
    width: '30px',
    height: '30px',
    position: 'relative',
    bottom: '5px',
    left: 'auto',
};

export default Footer;
