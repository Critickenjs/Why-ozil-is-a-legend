// navigation.js
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./stylesheader.css"


function Header() {
    return (
        <>
            <Navbar className="nav">
                <Container>
                    <Navbar.Brand href="/" className="nav-item">Mesut Özil</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="nav-item" >Accueil</Nav.Link>
                        <Nav.Link href="/Carriere" className="nav-item " >Carrière</Nav.Link>
                        <Nav.Link href="/login" className="nav-item " >Connection</Nav.Link>



                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;
