import { Student } from "./StudentListStudent"

import "../css/studentList.css";
import { useContext, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';

import {MainContext} from "../context/MainContext"


export function StudentList() {

    const {studentList} = useContext(MainContext);

    const [screenWidth, setScreenWidth] = useState(window.outerWidth);
    function handleResize() {
        setScreenWidth(window.outerWidth);
    }
    window.addEventListener('resize', handleResize);


    if (screenWidth >= 1420) {
        return <>
            {listStudents(studentList)}
        </>
    } else {
        return <>
            <Accordion defaultActiveKey="0" flush id="acordionButton">
                <Accordion.Item eventKey="1"  >
                    <Accordion.Header>Lista de Estudiantes</Accordion.Header>
                    <Accordion.Body id="studentList-acordion-body">
                        {listStudents(studentList)}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    }
}

function listStudents(students) {



    const tableHeader = {
        number: "N°",
        ci: "CI",
        names: "Nombres",
        lastNames: "Apellidos",
        lap1: "1er",
        lap2: "2do",
        lap3: "3er",
        def: "def",
        id: 0
    }
    let key = 0;

    if(students.length > 0){

        return <>
        <div id="studentList">
            <Student data={tableHeader} header={true} />
            <br />
            <div id="tableContainer">
                {
                    students.map(student => {
                        return <Student key={`k-${key++}`} data={student} header={false} />
                    })
                }
            </div>
        </div>
    </>
    }else{
        return <>
        <div id="studentList">
            <Student data={tableHeader} header={true} />
            <br />
            <div id="tableContainer">
                <h3>No se encontraron estudiantes inscritos en esta sección</h3>
            </div>
        </div>
    </>
    }

}