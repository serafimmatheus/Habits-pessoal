import { createContext, useState } from "react";
import { api } from "../../Services/api";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const PageHabitsContext = createContext();

export const PageHabitsProvider = ({ children }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token")) || ""
  );

  const [getIdEditeHabits, setGetIdEditeHabits] = useState();

  const [isModalHabits, setIsModalHabits] = useState(false);

  const [isModalHabitsEdite, setIsModalHabitsEdite] = useState(false);

  const decoded = jwt_decode(token);

  const [listHabits, setListHabits] = useState([]);

  const handleHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListHabits(response.data);
      });
  };

  const handleDeleteHabits = (id) => {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Hábito removido!");
      })
      .catch((_) => {
        toast.error("Sem permissão!");
      });
  };

  const handleSubmitHabits = ({ ...rest }) => {
    const data = {
      ...rest,
      user: decoded.user_id,
      achieved: false,
      how_much_achieved: 0,
    };

    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Habito criado!");
        setIsModalHabits(!isModalHabits);
      })
      .catch((err) => {
        toast.error("Erro ao criar Habito!");
      });
  };

  const handleSubmitHabitsEdite = ({
    category,
    difficulty,
    frequency,
    title,
  }) => {
    const newData = {
      category,
      difficulty,
      frequency,
      title,
      how_much_achieved: 100,
      achieved: true,
    };

    api
      .patch(`/habits/${getIdEditeHabits}/`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Habito Atualizado!");
        setIsModalHabitsEdite(!isModalHabitsEdite);
      })
      .catch((err) => {
        toast.success("Erro ao atualizar Habito!");
      });
  };

  return (
    <PageHabitsContext.Provider
      value={{
        handleHabits,
        listHabits,
        handleDeleteHabits,
        handleSubmitHabits,
        handleSubmitHabitsEdite,
        getIdEditeHabits,
        setGetIdEditeHabits,
        isModalHabits,
        setIsModalHabits,
        isModalHabitsEdite,
        setIsModalHabitsEdite,
      }}
    >
      {children}
    </PageHabitsContext.Provider>
  );
};
