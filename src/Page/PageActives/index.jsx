import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiPlusCircle } from "react-icons/fi";
import { HeaderDashboar } from "../../Components/HeaderDashBoard/index";
import { ModalGroupsActivesCreate } from "../../Components/ModalGroupsActivesCreate";
import { PageGroupsActivesContext } from "../../Context/PageGroupsActivesContext";
import { MainGroupsActives } from "./style";
import { useParams } from "react-router-dom";

export const PageGroupsActives = () => {
  const {
    handleGetGroupsActives,
    nextPage,
    setIsModalGroupsActives,
    isModalGroupsActives,
    teste,
    handleBeforePage,
    handleNextPage,
    setParamsTeste,
    paramsTeste,
  } = useContext(PageGroupsActivesContext);

  const params = useParams();

  console.log(params.group_id);

  setParamsTeste(params.group_id);

  return (
    <>
      <HeaderDashboar />
      <ModalGroupsActivesCreate
        setIsModalGroupsActives={setIsModalGroupsActives}
        isModalGroupsActives={isModalGroupsActives}
      />
      <MainGroupsActives>
        <section>
          <div>
            <h2>Criar Atividades</h2>
            <p onClick={() => setIsModalGroupsActives(!isModalGroupsActives)}>
              <FiPlusCircle />
            </p>
          </div>

          <ul>
            {teste.length > 0
              ? teste.map((elem) => (
                  <li>
                    <h2>nome:{elem.title}</h2>
                    <p>{elem.realization_time}</p>
                  </li>
                ))
              : "Adicione uma atividade"}
          </ul>
        </section>
      </MainGroupsActives>
    </>
  );
};
