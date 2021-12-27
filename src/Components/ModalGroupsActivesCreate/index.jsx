import { ModalGroupsActivesDiv } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/api";
import { FiXSquare } from "react-icons/fi";
import { toast } from "react-toastify";
import { GetIdGroupsGoalsContext } from "../../Context/IdGroupsGoals";
import { format } from "date-fns";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

export const ModalGroupsActivesCreate = ({
  isModalGroupsActives,
  setIsModalGroupsActives,
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token"))
  );

  const { getIdGroupsGoals } = useContext(GetIdGroupsGoalsContext);

  const schema = yup.object().shape({});

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitGroupsGoal = ({ title, realization_time }) => {
    const newData = {
      title: title,
      realization_time: format(new Date(), "yyyy-MM-dd h:m:s"),
      group: getIdGroupsGoals,
    };
    console.log(newData);
    api
      .post(
        "/activities/",
        newData,
        { null: null },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Atividade criada");
        setIsModalGroupsActives(!isModalGroupsActives);
      })
      .catch((err) => {
        toast.error("Error");
      });
  };

  return (
    <ModalGroupsActivesDiv isModalGroupsActives={isModalGroupsActives}>
      <form onSubmit={handleSubmit(handleSubmitGroupsGoal)}>
        <div>
          <h2>Cadastro de Atividades</h2>
          <p onClick={() => setIsModalGroupsActives(!isModalGroupsActives)}>
            <FiXSquare />
          </p>
        </div>

        <TextField
          {...register("title")}
          fullWidth
          label="Titulo da Atividade"
          id="fullWidth"
        />

        <Button type="submit" variant="contained">
          Criar Atividade
        </Button>
      </form>
    </ModalGroupsActivesDiv>
  );
};
