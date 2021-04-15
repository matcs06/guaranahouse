import React, {createContext, useContext, useState} from "react"

export const AppContext = createContext()

export const AppProvider = ({children})=>{
    const [shared, setShared] = useState({items:[], address:{}})
    const [cover, setCover] = useState("")


    return(
        <AppContext.Provider value={[shared, setShared, cover, setCover] } >
            {children}
        </AppContext.Provider>
    )

}

