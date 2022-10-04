import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { AiOutlineUser, AiOutlineImport, AiOutlineIssuesClose } from "react-icons/ai";

import "../css/navBarLogo.css";
import logo from "../svg/logo.svg";




export function NavLogo(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const iconsSize = "30px"

    return <>
        <Button onClick={handleShow} id="navBarBtnLogo">
            <img src={logo} alt="" id='navBar-logo' />
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props} id="navBarOffcanvas">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id='navBarOffcanvasBody'>
            <div className='navBarCanvasItem'><AiOutlineUser size={iconsSize}/> <div className='navBarCanvasItemText'>Profesor Juan Vicente Gomes</div></div>
            <div className='navBarCanvasItem'><AiOutlineIssuesClose size={iconsSize}/> <div className='navBarCanvasItemText'>Informacón</div></div>
            <div className='navBarCanvasItem'><AiOutlineImport size={iconsSize}/> <div className='navBarCanvasItemText'>Cerrar Sección</div></div>
            </Offcanvas.Body>
        </Offcanvas>
    </>



}

