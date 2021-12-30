import { useContext } from "react";
import { FiXCircle, FiEdit } from "react-icons/fi";
import { PageHabitsContext } from "../../Context/PageHabitosContext";
import { LiHabits, BarsProgress } from "./style";

export const CardsHabits = ({
  progress,
  title,
  difficulty,
  frequency,
  category,
  how_much_achieved,
  id,
}) => {
  const {
    handleDeleteHabits,
    setGetIdEditeHabits,
    isModalHabitsEdite,
    setIsModalHabitsEdite,
  } = useContext(PageHabitsContext);
  return (
    <LiHabits>
      <h2>{title}</h2>
      <p>{difficulty}</p>
      <p>{frequency}</p>
      <p>{category}</p>

      <BarsProgress progress={how_much_achieved}>
        <span></span>
      </BarsProgress>

      <div>
        <button onClick={() => handleDeleteHabits(id)}>
          <FiXCircle />
        </button>
        <button
          onClick={() => {
            setIsModalHabitsEdite(!isModalHabitsEdite);
            setGetIdEditeHabits(id);
          }}
        >
          <FiEdit />
        </button>
      </div>
    </LiHabits>
  );
};
