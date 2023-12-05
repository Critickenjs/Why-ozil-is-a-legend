import React from 'react';
import ozilvideo from '../../rss/img/ozil.mp4';
import Navigator from '../navigation/navigation';

import './stylesheader.css';

const Header = () => {
    return (
        <header>
            <div id="video-background">
                <div className="video-container">
                    <video width="100%" height="auto" autoPlay loop muted>
                        <source src={ozilvideo} type="video/mp4" />
                    </video>
                </div>
                <div id="content">
                    <div className="content-over-video">
                        <Navigator />

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
