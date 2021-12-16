import { HeaderDashboar } from "../../Components/HeaderDashBoard";
import { useEffect } from "react";
import { MainHabits } from "./style";
import { FiPlusCircle, FiXCircle, FiEdit } from "react-icons/fi";
import { ModalHabits } from "../../Components/ModalHabits";
import { ModalHabitsEdite } from "../../Components/ModalHabitsEdite";
import { PageHabitsContext } from "../../Context/PageHabitosContext";
import { useContext } from "react";

export const PageHabits = () => {
  const {
    handleHabits,
    listHabits,
    handleDeleteHabits,
    setGetIdEditeHabits,
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
          {listHabits.map((elem) => (
            <li key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.difficulty}</p>
              <p>{elem.frequency}</p>
              <p>{elem.category}</p>
              <div>
                <button onClick={() => handleDeleteHabits(elem.id)}>
                  <FiXCircle />
                </button>
                <button
                  onClick={() => {
                    setIsModalHabitsEdite(!isModalHabitsEdite);
                    setGetIdEditeHabits(elem.id);
                  }}
                >
                  <FiEdit />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </MainHabits>
    </>
  );
};

/*
title: "Academia a Tarde (15 minutos)"
frequency: "Diária"
difficulty: "díficil"
id: 326
category: "Sáude"

achieved: false
user: 94
*/
