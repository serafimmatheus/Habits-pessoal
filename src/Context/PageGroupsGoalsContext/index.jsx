import { createContext, useContext, useState } from "react";
import { api } from "../../Services/api";
import { GetIdGroupsGoalsContext } from "../IdGroupsGoals";

export const PageGroupsGoalsContext = createContext();

export const PageGroupsGoalsProvider = ({ children }) => {
  const [listGroupsGoals, setListGroupsGoals] = useState([]);

  const { getIdGroupsGoals } = useContext(GetIdGroupsGoalsContext);

  const [isModalGroupsGoals, setIsModalGroupsGoals] = useState(false);

  const [nextPage, setNextPage] = useState(1);

  const handleNextPage = () => {
    setNextPage(nextPage + 1);
  };

  const handleBeforePage = () => {
    if (nextPage > 0) {
      setNextPage(nextPage - 1);
    }
  };

  const handleGetGroupsGoals = () => {
    api
      .get(`/goals/?page=${nextPage}`)

      .then((response) => setListGroupsGoals(response.data.results));
  };

  const teste = listGroupsGoals
    .map((elem) => elem)
    .filter((elem) => elem.group === getIdGroupsGoals);

  return (
    <PageGroupsGoalsContext.Provider
      value={{
        handleGetGroupsGoals,
        nextPage,
        setIsModalGroupsGoals,
        isModalGroupsGoals,
        teste,
        handleBeforePage,
        handleNextPage,
      }}
    >
      {children}
    </PageGroupsGoalsContext.Provider>
  );
};
