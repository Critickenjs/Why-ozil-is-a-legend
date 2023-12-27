import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'white',
    padding: '5px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    spaceBetween: '10px',
    color: 'black',
  };

  const iconStyle = {
    fontSize: '30px', // Ajustez la taille des icônes selon vos préférences
    margin: '0 5px', // Espace entre les icônes
    color: 'black',  // Couleur noire pour les icônes
  };

  const githubBtnStyle = {
    ...iconStyle,
    marginLeft: 'auto',
    marginRight: '0',
  };

  const twitterBtnStyle = {
    ...iconStyle,
  };

  const personalSiteBtnStyle = {
    ...iconStyle,
  };

  const discordBtnStyle = {
    ...iconStyle,
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a
          href="https://github.com/Critickenjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={githubBtnStyle}></i>
        </a>
        <a
          href="https://twitter.com/liess_el"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" style={twitterBtnStyle}></i>
        </a>
        <a
          href="https://www.yliesselatifi.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
            <i className="fas fa-briefcase" style={personalSiteBtnStyle}></i>
        </a>
        <a
          href="https://discord.gg/AxxGFA8mRK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-discord" style={discordBtnStyle}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
