import { HeaderDashboar } from "../../Components/HeaderDashBoard";
import { useEffect } from "react";
import { MainHabits } from "./style";
import { FiPlusCircle } from "react-icons/fi";
import { ModalHabits } from "../../Components/ModalHabits";
import { ModalHabitsEdite } from "../../Components/ModalHabitsEdite";
import { PageHabitsContext } from "../../Context/PageHabitosContext";
import { useContext } from "react";
import { CardsHabitsConclution } from "../../Components/CardsHabitsConclution";
import { CardsHabits } from "../../Components/CardsHabits";

export const PageHabits = () => {
  const {
    handleHabits,
    listHabits,
    isModalHabits,
    setIsModalHabits,
    isModalHabitsEdite,
    setIsModalHabitsEdite,
  } = useContext(PageHabitsContext);

  useEffect(() => {
    handleHabits();
  }, [listHabits]);

  return (
    <>
      <ModalHabits
        setIsModalHabits={setIsModalHabits}
        isModalHabits={isModalHabits}
      />

      <ModalHabitsEdite
        setIsModalHabitsEdite={setIsModalHabitsEdite}
        isModalHabitsEdite={isModalHabitsEdite}
      />

      <HeaderDashboar src={false} />

      <MainHabits>
        <div>
          <h2>Meus hábitos</h2>
          <p onClick={() => setIsModalHabits(!isModalHabits)}>
            <FiPlusCircle />
          </p>
        </div>
        <ul>
          {listHabits.map((elem) => {
            if (elem.achieved === true) {
              return (
                <CardsHabitsConclution
                  id={elem.id}
                  title={elem.title}
                  difficulty={elem.difficulty}
                  frequency={elem.frequency}
                  category={elem.category}
                  how_much_achieved={elem.how_much_achieved}
                  progress={elem.how_much_achieved}
                />
              );
            } else {
              return (
                <CardsHabits
                  id={elem.id}
                  title={elem.title}
                  difficulty={elem.difficulty}
                  frequency={elem.frequency}
                  category={elem.category}
                  how_much_achieved={elem.how_much_achieved}
                  progress={elem.how_much_achieved}
                />
              );
            }
          })}
        </ul>
      </MainHabits>
    </>
  );
};
