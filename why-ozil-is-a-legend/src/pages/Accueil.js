import React from 'react';
import Header from '../components/header/header';
import Playerprofile from '../components/PlayerProfile/PlayerProfile';
import '../styles/styles.css'
import Footer from '../components/Footer/Footer';
import Authdetails from '../components/Login/Authdetails';
function Accueil() {
    return (
        <div>
            <Header />
            <Playerprofile />
            <Footer />
        </div>
    );
}

export default Accueil;
