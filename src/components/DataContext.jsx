import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    registration: {},
    cartItems: []
  });

  return (
    <DataContext.Provider value={{ userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};
