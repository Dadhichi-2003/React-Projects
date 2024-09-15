import React, { createContext, useContext, useState } from 'react';

// Create a context
export const DetailsContext = createContext();

// Provide the context
export const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState({
    name: "" ,
    position: "",
    place: "",
    number: "",
    email: "",
    dynamicFields: []
  });

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

// Custom hook for using context
export const useDetails = () => useContext(DetailsContext);
