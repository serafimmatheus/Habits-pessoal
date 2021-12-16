import { createContext, useContext, useState } from "react";
import { api } from "../../Services/api";
import { GetIdGroupsGoalsContext } from "../IdGroupsGoals";

export const PageGroupsActivesContext = createContext();

export const PageGroupsActivesProvider = ({ children }) => {
  const [listGroupsActives, setListGroupsActives] = useState([]);

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

  const handleGetGroupsActives = () => {
    api
      .get(`/activities/?page=${nextPage}`)

      .then((response) => {
        setListGroupsActives(response.data.results);
      });
  };

  const teste = listGroupsActives
    .map((elem) => elem)
    .filter((elem) => elem.group === getIdGroupsGoals);

  return (
    <PageGroupsActivesContext.Provider
      value={{
        handleGetGroupsActives,
        nextPage,
        setIsModalGroupsActives,
        isModalGroupsActives,
        teste,
        handleBeforePage,
        handleNextPage,
      }}
    >
      {children}
    </PageGroupsActivesContext.Provider>
  );
};
