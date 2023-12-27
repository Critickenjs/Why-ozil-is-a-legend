import React, { useEffect, useState } from 'react';
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import "./stylesheader.css";
import { Nav , Navbar } from 'react-bootstrap';
function Header() {
    const [authUser, setUser] = useState(null);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const menuToggle = () => {
        const menuHolder = document.getElementById('menuHolder');
        if (menuHolder.className === 'drawMenu') {
            menuHolder.className = '';
        } else {
            menuHolder.className = 'drawMenu';
        }
    };

    const onResize = () => {
        const windowWidth = window.innerWidth;
        const siteBrand = document.getElementById('siteBrand');
        if (windowWidth < 426) {
            siteBrand.innerHTML = "M10";
        } else if (windowWidth < 420) {
            siteBrand.innerHTML = "M10";
        } else {
            siteBrand.innerHTML = "Mesut Özil";
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        onResize(); // Call onResize initially
        window.addEventListener('resize', onResize); // Add event listener for window resize

        return () => {
            unsubscribe();
            window.removeEventListener('resize', onResize); // Remove event listener on component unmount
        };
    }, []);
    return (
        <>
            <div className={`p-3 bg-dark text-white ${authUser ? 'drawMenu' : ''}`}>
                <div className="flexMain">
                    <div className="flex1"></div>
                    <div className="flex2 text-center">
                        <div><strong>Yliess est trop beau</strong></div>
                    </div>
                    <div className="flex1"></div>
                </div>
            </div>
            <div id="menuHolder">
                <div className={`sticky-top border-bottom border-top ${authUser ? 'drawMenu' : ''}`} id="mainNavigation">
                    <div className="flexMain">
                        <div className="flex2">
                            <button className="whiteLink siteLink" style={{ borderRight: '1px solid #eaeaea' }} onClick={menuToggle}>
                                <i className="fas fa-bars me-2"></i> MENU
                            </button>
                        </div>
                        <div className="flex3 text-center" id="siteBrand">
                            Mesut Özil
                        </div>
                        <div className="flex2 text-end d-block d-md-none">
                        </div>
                        <div className="flex2 text-end d-none d-md-block">
                        {window.innerWidth >= 300 && authUser ? (
                                <>
                                    <button className="whiteLink siteLink" onClick={handleSignOut}>Déconnexion</button>
                                    <button className="blackLink siteLink" onClick={() => window.location.href = "/Profile"}>Mon profil</button>
                                </>
                            ) : (
                            <>
                            <button className="whiteLink siteLink" onClick={() => window.location.href = "/signup"}>Créer un compte</button>
                            <button className="blackLink siteLink" onClick={() => window.location.href = "/login"}>Se connecter</button>
                                                        </>
                            )}
                            
                        </div>
                    </div>
                </div>
                <div id="menuDrawer">
                    <div className="p-4 border-bottom">
                        <div className='row'>
                            <div className="col">
                                <select className="noStyle">
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="french">French</option>
                                </select>
                            </div>
                            <div className="col text-end ">
                                <i className="fas fa-times" role="btn" onClick={menuToggle}></i>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div>
                        <a href="/" class="nav-menu-item"><i class="fas fa-home me-3"></i>Accueil</a>
                        <a href="/Carriere" class="nav-menu-item"><i class="fas fa-home me-3"></i>Carriere</a>

                    </div>  
                    </div>
                </div>
            </div>
        </>
    );
}




export default Header;
