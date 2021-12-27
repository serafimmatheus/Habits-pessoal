import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiPlusCircle } from "react-icons/fi";
import { HeaderDashboar } from "../../Components/HeaderDashBoard/index";
import { ModalGroupsGoalsCreate } from "../../Components/ModalGroupsGoalsCreate";
import { PageGroupsGoalsContext } from "../../Context/PageGroupsGoalsContext";
import { MainGroupsGoals } from "./style";
import { useParams } from "react-router-dom";

export const PageGroupsGoals = () => {
  const {
    handleGetGroupsGoals,
    nextPage,
    setIsModalGroupsGoals,
    isModalGroupsGoals,
    teste,
    handleBeforePage,
    handleNextPage,
  } = useContext(PageGroupsGoalsContext);

  const paramsGroupsGoals = useParams();

  useEffect(() => {
    handleGetGroupsGoals(paramsGroupsGoals.group_id);
  }, [nextPage]);

  return (
    <>
      <HeaderDashboar />
      <ModalGroupsGoalsCreate
        setIsModalGroupsGoals={setIsModalGroupsGoals}
        isModalGroupsGoals={isModalGroupsGoals}
      />
      <MainGroupsGoals>
        <section>
          <div>
            <h2>Criar Metas</h2>
            <p onClick={() => setIsModalGroupsGoals(!isModalGroupsGoals)}>
              <FiPlusCircle />
            </p>
          </div>

          <ul>
            {teste.map((elem) => (
              <li>
                <h2>{elem.title}</h2>
                <p>{elem.difficulty}</p>
              </li>
            ))}
          </ul>
        </section>
      </MainGroupsGoals>
    </>
  );
};
