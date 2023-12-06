import React, { useContext } from 'react';
import Header from '../components/header/header';
import { PlayerContainer, PlayerImage, PlayerName, PlayerStats } from '../components/Playerstyles/PlayerStyles';
import ozilImage from '../rss/img/Mesut-Ozil-8.png';
import "../styles/styles.css";

const Carriere = () => {
    return (
        <div>
            <Header />
            <PlayerContainer>
                <PlayerImage src={ozilImage} alt="Mesut Ozil" />
                <PlayerName>Mesut Ozil</PlayerName>
                <PlayerStats>Position: Attacking Midfielder</PlayerStats>
                <PlayerStats>Nationality: German</PlayerStats>
            </PlayerContainer>
        </div>
    );
};

export default Carriere;