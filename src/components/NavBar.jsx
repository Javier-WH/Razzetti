import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../svg/logo.svg";
import "../css/navBar.css";

export function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <img src={logo} alt="" id='navBar-logo'/>
                <Navbar.Brand href="#home">Escuela Tecnica Comercial Luis Razetti</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}