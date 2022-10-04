import { useContext } from "react"
import {MainContext} from "../context/MainContext"
import "../css/seccionNameContainer.css"
export function SeccionName(){

    const {activeSubject} = useContext(MainContext)
    if(activeSubject === undefined){
        return <div id="seccionName-container">
        <div id="seccionMessage">Seleccione una sección para iniciar</div>
    </div>
    }else{
        return <div id="seccionName-container">
        <div id="seccionName"> Física 3-A</div>
        <div id="seccionSchoolYear">Período escolar 2022-2023</div>
    </div>
    }
}