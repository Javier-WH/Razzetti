import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiFillPrinter } from "react-icons/ai";

import "../css/navBar.css";

import { SeccionDropBox } from "./NavBarSeccionDropBox";
import {NavLogo} from "./NavLogo";


export function NavBar() {
    const iconsSise = "40px"
    return (
        <Navbar id='navBar'>
            <Container>
                <NavLogo placement = "start"/>
                <div href="#home" id='navBar-title'>Escuela Tecnica Comercial Luis Razetti</div>
                <Nav className="me-auto">
                    <SeccionDropBox />
                    <Nav.Link href="#home"><AiFillPrinter size={iconsSise} color={"var(--textColor1)"}/></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}