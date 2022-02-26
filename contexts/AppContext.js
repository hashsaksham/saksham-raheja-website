import React, { useState, createContext, useContext } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageSections, setPageSections] = useState([]);
  return (
    <AppContext.Provider
      value={{
        pageSections,
        setPageSections,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default function useAppContext() {
  return useContext(AppContext);
}
