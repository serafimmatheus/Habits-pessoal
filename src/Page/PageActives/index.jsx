import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiPlusCircle } from "react-icons/fi";
import { HeaderDashboar } from "../../Components/HeaderDashBoard/index";
import { ModalGroupsActivesCreate } from "../../Components/ModalGroupsActivesCreate";
import { PageGroupsActivesContext } from "../../Context/PageGroupsActivesContext";
import { MainGroupsActives } from "./style";

export const PageGroupsActives = () => {
  const {
    handleGetGroupsActives,
    nextPage,
    setIsModalGroupsActives,
    isModalGroupsActives,
    teste,
    handleBeforePage,
    handleNextPage,
  } = useContext(PageGroupsActivesContext);

  useEffect(() => {
    handleGetGroupsActives();
  }, [nextPage]);

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
            {teste.map((elem) => (
              <li>
                <h2>nome:{elem.title}</h2>
                <p>{elem.realization_time}</p>
              </li>
            ))}
          </ul>
        </section>

        <div>
          <Button
            sx={{ marginRight: "20px" }}
            variant="contained"
            onClick={() => handleBeforePage()}
          >
            <FiChevronLeft />
          </Button>

          <Button variant="contained" onClick={() => handleNextPage()}>
            <FiChevronRight />
          </Button>
        </div>
      </MainGroupsActives>
    </>
  );
};
