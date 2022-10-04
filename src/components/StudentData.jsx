import Form from 'react-bootstrap/Form';
import "../css/studentNameContainer.css"

import {MainContext} from "../context/MainContext"
import { useContext } from 'react';

export function StudentData() {

    const {activeSubject} = useContext(MainContext);

    if(activeSubject === undefined){
        return
    }

    return <div id='studentNameContainer'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
    </div>

}