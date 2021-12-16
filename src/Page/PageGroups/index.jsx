import { HeaderDashboar } from "../../Components/HeaderDashBoard";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { FiChevronLeft, FiChevronRight, FiPlusSquare } from "react-icons/fi";
import { MainGroups } from "./style";
import { ModalGroupsCreate } from "../../Components/ModalGroupsCreate";
import { ModalGroupsEdite } from "../../Components/ModalGroupsEdite";
import { useContext } from "react";
import { ListCardsGroups } from "../../Components/CardsGroups";
import { PageGroupsContext } from "../../Context/PageGroupsContext";

export const PageGroups = () => {
  const {
    changeGetIdGroupsGoals,
    decode,
    isModalGroup,
    setIsModalGroup,
    isModalGroupEdite,
    setIsModalGroupEdite,
    getIdEditeGroups,
    setGetIdEditeGroups,
    isSrcTrue,
    setIsSrcTrue,
    listGroups,
    nextpage,
    srcGroups,
    setSrcGroups,
    newListGroups,
    handleNextPage,
    handleBeforePage,
    handleGroups,
    handleFilterGroups,
    handleSubscribeGroups,
    handleUnSubscribeGroups,
    handleDeleGroups,
  } = useContext(PageGroupsContext);

  useEffect(() => {
    handleGroups();
  }, [isSrcTrue, nextpage]);

  return (
    <>
      <ModalGroupsCreate
        setIsModalGroup={setIsModalGroup}
        isModalGroup={isModalGroup}
        handleGroups={handleGroups}
      />

      <ModalGroupsEdite
        getIdEditeGroups={getIdEditeGroups}
        setIsModalGroupEdite={setIsModalGroupEdite}
        isModalGroupEdite={isModalGroupEdite}
        handleGroups={handleGroups}
      />

      <HeaderDashboar
        handleFilterGroups={handleFilterGroups}
        setSrcGroups={setSrcGroups}
        src={true}
        setIsSrcTrue={setIsSrcTrue}
        isSrcTrue={isSrcTrue}
        srcGroups={srcGroups}
      />

      <MainGroups>
        <div>
          <p>Criar Grupo</p>
          <p onClick={() => setIsModalGroup(!isModalGroup)}>
            <FiPlusSquare />
          </p>
        </div>
        <section>
          <ul>
            {isSrcTrue
              ? newListGroups.map((elem) => (
                  <ListCardsGroups
                    name={elem.name}
                    description={elem.description}
                    users_on_group={elem.users_on_group}
                    goals={elem.goals}
                    creator={elem.creator}
                    activities={elem.activities}
                    isModalGroupEdite={elem.isModalGroupEdite}
                    id={elem.id}
                    category={elem.category}
                    color={elem.id}
                    setIsModalGroupEdite={setIsModalGroupEdite}
                    setGetIdEditeGroups={setGetIdEditeGroups}
                    handleDeleGroups={handleDeleGroups}
                    handleUnSubscribeGroups={handleUnSubscribeGroups}
                    handleSubscribeGroups={handleSubscribeGroups}
                    changeGetIdGroupsGoals={changeGetIdGroupsGoals}
                    decode={decode}
                    isSrcTrue={isSrcTrue}
                  />
                ))
              : listGroups.map((elem) => (
                  <ListCardsGroups
                    name={elem.name}
                    description={elem.description}
                    users_on_group={elem.users_on_group}
                    goals={elem.goals}
                    creator={elem.creator}
                    activities={elem.activities}
                    isModalGroupEdite={elem.isModalGroupEdite}
                    id={elem.id}
                    category={elem.category}
                    color={elem.id}
                    setIsModalGroupEdite={setIsModalGroupEdite}
                    setGetIdEditeGroups={setGetIdEditeGroups}
                    handleDeleGroups={handleDeleGroups}
                    handleUnSubscribeGroups={handleUnSubscribeGroups}
                    handleSubscribeGroups={handleSubscribeGroups}
                    changeGetIdGroupsGoals={changeGetIdGroupsGoals}
                    decode={decode}
                    isSrcTrue={isSrcTrue}
                  />
                ))}
            <div className="buttons-sets">
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
          </ul>
        </section>
      </MainGroups>
    </>
  );
};
