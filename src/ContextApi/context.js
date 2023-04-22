import React from "react";



const AppContext = React.createContext()

export const AppProvader = ({children}) =>{
    return(
        <AppContext.Provider value={}>
            {children}
        </AppContext.Provider>
    )
}