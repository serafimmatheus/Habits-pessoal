import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nameUser, setNameuser] = useState("");

  return (
    <UserContext.Provider value={{ setNameuser, nameUser }}>
      {children}
    </UserContext.Provider>
  );
};
