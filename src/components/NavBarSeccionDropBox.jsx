import Dropdown from 'react-bootstrap/Dropdown';
import "../css/navBarSeccionMenu.css"
import {MainContext} from "../context/MainContext"
import { useContext } from 'react';

export function SeccionDropBox() {

  const {changeSubject} = useContext(MainContext)

  function seccionHandle(e){
    let subject = e.target.innerText;
    changeSubject(subject)
  }


  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Secciones
      </Dropdown.Toggle>
      <Dropdown.Menu style={{zIndex:"5000"}}>
        <Dropdown.Item href="#/action-1" onClick={seccionHandle}>Matemática</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

