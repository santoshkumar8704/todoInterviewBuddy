import { createContext, useState } from "react";
const myContext = createContext();
export const MyContextProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState("");
  return (
    <myContext.Provider
      value={{
        collections,
        setCollections,
        activeCollection,
        setActiveCollection,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
export default myContext;
