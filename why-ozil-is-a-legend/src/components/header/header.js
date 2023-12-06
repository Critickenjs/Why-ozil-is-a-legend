// navigation.js
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./stylesheader.css"


function Header() {
    return (
        <>
            <Navbar className="redBackground" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="whiteText">Mesut Özil</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="whiteText" >Accueil</Nav.Link>
                        <Nav.Link href="/Carriere" className="whiteText " >Carrière</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;
