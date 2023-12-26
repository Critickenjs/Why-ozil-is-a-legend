import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./stylesheader.css";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <Navbar expand="lg" className="nav">
                <Container>
                    <Navbar.Brand href="/" className="nav-item">Mesut Özil</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className="nav-item">Accueil</Nav.Link>
                            <Nav.Link href="/Carriere" className="nav-item">Carrière</Nav.Link>
                            {authUser ? (
                                <>
                                    <Nav.Link href="/" className="nav-item" onClick={handleSignOut}>Déconnexion</Nav.Link>
                                    <Nav.Link href="/Profile" className="nav-item">Mon profil</Nav.Link>
                                </>
                            ) : (
                                <Nav.Link href="/login" className="nav-item">Connexion</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
