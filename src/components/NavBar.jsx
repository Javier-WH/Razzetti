import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiFillPrinter } from "react-icons/ai";
import logo from "../svg/logo.svg";
import "../css/navBar.css";

import { SeccionDropBox } from "./NavBarSeccionDropBox";


export function NavBar() {
    const iconsSise = "40px"
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <img src={logo} alt="" id='navBar-logo' />
                <Navbar.Brand href="#home" id='navBar-title'>Escuela Tecnica Comercial Luis Razetti</Navbar.Brand>
                <Nav className="me-auto">
                    <SeccionDropBox />
                    <Nav.Link href="#home"><AiFillPrinter size={iconsSise} color={"var(--textColor1)"}/></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}