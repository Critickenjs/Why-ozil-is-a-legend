import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    padding: '5px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    spaceBetween: '10px',
    color: 'white',
  };

  const iconStyle = {
    fontSize: '30px', 
    margin: '0 5px', 
  };

  const githubBtnStyle = {
    ...iconStyle,
    marginLeft: 'auto',
    marginRight: '0',
  };

  const twitterBtnStyle = {
    ...iconStyle,
    color: '#1DA1F2', 
  };

  const personalSiteBtnStyle = {
    ...iconStyle,
    color: '#4CAF50', 
  };

  const discordBtnStyle = {
    ...iconStyle,
    color: '#7289DA', 
  };

  return (
    <footer style={footerStyle}>
      <a>Yliess El atifi</a>
      <div>
        <a
          href="https://github.com/Critickenjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={githubBtnStyle}></i>
        </a>
        <a
          href="https://twitter.com/VotreNomTwitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" style={twitterBtnStyle}></i>
        </a>
        <a
          href="https://votresite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-globe" style={personalSiteBtnStyle}></i>
        </a>
        <a
          href="https://discord.gg/VotreCodeDiscord"
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
