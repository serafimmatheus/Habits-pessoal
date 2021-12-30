import { useContext } from "react";
import { FiXCircle } from "react-icons/fi";
import { PageHabitsContext } from "../../Context/PageHabitosContext";
import { LiHabits, BarsProgress } from "./style";

export const CardsHabitsConclution = ({
  progress,
  title,
  difficulty,
  frequency,
  category,
  how_much_achieved,
  id,
}) => {
  const { handleDeleteHabits } = useContext(PageHabitsContext);
  return (
    <LiHabits>
      <h2>{title}</h2>
      <p>{difficulty}</p>
      <p>{frequency}</p>
      <p>{category}</p>

      <BarsProgress progress={how_much_achieved}>
        <span>
          <p>Progresso</p>
        </span>
      </BarsProgress>
      <div>
        <button onClick={() => handleDeleteHabits(id)}>
          <FiXCircle />
        </button>
      </div>
    </LiHabits>
  );
};
