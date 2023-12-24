import React from 'react';
import Header from '../components/header/header';
import Playerprofile from '../components/PlayerProfile/PlayerProfile';
import '../styles/styles.css'
import Footer from '../components/Footer/Footer';
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
