import React, {createContext, useState} from "react";


import { fakeStudent } from "../components/studentJSOMtests";

export const MainContext = createContext();


export function MainContextContextProvider({children}){

    const [studentList, setStudentList] = useState(fakeStudent());
    const [activeSubject , setActiveSubject] = useState();
    const [activeSchoolYear , setActiveSchoolYear] = useState();

    function changeSubject(subject){
        setActiveSubject(subject);
        //setStudentList([]);
    }

    let value = {
        studentList,
        setStudentList,
        activeSubject,
        changeSubject, 
        activeSchoolYear, 
        setActiveSchoolYear
    }

    return <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
}