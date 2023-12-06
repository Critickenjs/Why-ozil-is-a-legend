import React, { useContext } from 'react';
import Header from '../components/header/header';
import Footer from '../components/Footer/Footer';
import { PlayerContainer, PlayerImage, PlayerName, PlayerStats } from '../components/Playerstyles/PlayerStyles';
import ozilImage from '../rss/img/Mesut-Ozil-8.png';
import "../styles/styles.css";
import Timeline from '../components/Timeline/Timeline'; // Assurez-vous que le chemin d'importation est correct

const events = [
    { year: 2006, description: 'Début de la carrière à Schalke 04' },
    { year: 2010, description: 'Transfert à Real Madrid' },
    { year: 2013, description: 'Transfert à Arsenal' },
    { year: 2018, description: 'Transfert à Fenerbahçe' },
];

const Carriere = () => {
    return (
        <div>
            <Header />
            <PlayerContainer>
                <PlayerImage src={ozilImage} alt="Mesut Ozil" />
                <PlayerName>Mesut Ozil</PlayerName>
                <PlayerStats>Position: Attacking Midfielder</PlayerStats>
                <PlayerStats>Nationality: German</PlayerStats>
                <Timeline events={events} />

            </PlayerContainer>
            <Footer />
        </div>
    );
};

export default Carriere;