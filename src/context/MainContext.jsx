import React, {createContext} from "react";


export const MainContext = createContext();


export function MainContextContextProvider({children}){

    let value = {

    }

    return <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
}