// Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
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
            <a>  Yliess El atifi</a>
        </footer>
    );
};

// Styles
const footerStyle = {
    backgroundColor: '#1a1055',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    spacebetween: 'center',
    color: 'white',
};

const githubBtnStyle = {
    width: '30px', // Ajustez la largeur selon vos besoins
    height: '30px', // Ajustez la hauteur selon vos besoins
};

export default Footer;
