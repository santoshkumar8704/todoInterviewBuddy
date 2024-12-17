import { createContext, useState } from "react";
const myContext = createContext()
export const MyContextProvider = ({children}) => {
    const [collections,setCollections] = useState([])
    return (
        <myContext.Provider value={{collections,setCollections}}>
            {children}
        </myContext.Provider>
    ) 
}
export default myContext