import { createContext, useContext, useState } from "react";
import { api } from "../../Services/api";
import { GetIdGroupsGoalsContext } from "../IdGroupsGoals";
import { useEffect } from "react";

export const PageGroupsActivesContext = createContext();

export const PageGroupsActivesProvider = ({ children }) => {
  const [listGroupsActives, setListGroupsActives] = useState([]);

  const [paramsTeste, setParamsTeste] = useState(0);

  const { getIdGroupsGoals } = useContext(GetIdGroupsGoalsContext);

  const [isModalGroupsActives, setIsModalGroupsActives] = useState(false);

  const [nextPage, setNextPage] = useState(1);

  const handleNextPage = () => {
    setNextPage(nextPage + 1);
  };

  const handleBeforePage = () => {
    if (nextPage > 1) {
      setNextPage(nextPage - 1);
    }
  };

  console.log(paramsTeste);

  useEffect(() => {
    api
      .get(`/activities/?group=${paramsTeste}`)

      .then((response) => {
        setListGroupsActives(response.data.results);
      });
  }, [nextPage, paramsTeste]);

  const teste = listGroupsActives
    .map((elem) => elem)
    .filter((elem) => elem.group === getIdGroupsGoals);

  return (
    <PageGroupsActivesContext.Provider
      value={{
        nextPage,
        setIsModalGroupsActives,
        isModalGroupsActives,
        teste,
        handleBeforePage,
        handleNextPage,
        paramsTeste,
        setParamsTeste,
      }}
    >
      {children}
    </PageGroupsActivesContext.Provider>
  );
};
