import React, { useState, createContext } from 'react';

// A React Context to store the user's info
export const UserAuthContext = createContext({});

// A provider to allow children screens access to the info
export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};