import { createContext, useState } from "react";

export const GetIdGroupsGoalsContext = createContext();

export const GetIdGroupsGoalsProviders = ({ children }) => {
  const [getIdGroupsGoals, setGetIdGroupsGoals] = useState();
  const [getNameUser, setGetNameUser] = useState();

  const changeGetIdGroupsGoals = (id) => {
    setGetIdGroupsGoals(id);
  };

  return (
    <GetIdGroupsGoalsContext.Provider
      value={{
        setGetNameUser,
        getNameUser,
        getIdGroupsGoals,
        changeGetIdGroupsGoals,
      }}
    >
      {children}
    </GetIdGroupsGoalsContext.Provider>
  );
};
