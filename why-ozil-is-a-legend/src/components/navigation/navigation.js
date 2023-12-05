// Navigation.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import btn from '../../rss/img/menu-btn.png';



const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Fonction pour basculer l'état du menu mobile
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className='navbar'>
            <a href='/' className='logo'>Mesut Özil</a>
            <div className='nav-links'>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="nav-active" exact>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Carriere" activeClassName="nav-active">
                            Carriere
                        </NavLink>
                    </li>
                </ul>
            </div>
            <img src={btn} alt="btn" className='menu-hamburger' />
        </nav>
    );
}


export default Navigation;


