import React from "react";



const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}