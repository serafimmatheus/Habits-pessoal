import { ModalGroupsGoalDiv } from "./style";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/api";
import { FiXSquare } from "react-icons/fi";
import { toast } from "react-toastify";
import { GetIdGroupsGoalsContext } from "../../Context/IdGroupsGoals";

export const ModalGroupsGoalsCreate = ({
  isModalGroupsGoals,
  setIsModalGroupsGoals,
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token"))
  );

  const { getIdGroupsGoals } = useContext(GetIdGroupsGoalsContext);

  const schema = yup.object().shape({});

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(getIdGroupsGoals);

  const handleSubmitGroupsGoal = ({ title, difficulty }) => {
    const newData = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: 0,
      achieved: false,
      group: getIdGroupsGoals,
    };
    console.log(newData);
    api
      .post(
        "/groups/",
        newData,
        { null: null },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Grupo criado");
        setIsModalGroupsGoals(!isModalGroupsGoals);
      })
      .catch((err) => {
        toast.error("Error");
      });
  };

  return (
    <ModalGroupsGoalDiv isModalGroupsGoals={isModalGroupsGoals}>
      <form onSubmit={handleSubmit(handleSubmitGroupsGoal)}>
        <div>
          <h2>Cadastro de metas</h2>
          <p onClick={() => setIsModalGroupsGoals(!isModalGroupsGoals)}>
            <FiXSquare />
          </p>
        </div>

        <TextField
          {...register("title")}
          fullWidth
          label="Titulo da Meta"
          id="fullWidth"
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">Dificuldade</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              {...register("difficulty")}
              value="Facil"
              control={<Radio />}
              label="Fácil"
            />
            <FormControlLabel
              {...register("difficulty")}
              value="medio"
              control={<Radio />}
              label="Médio"
            />
            <FormControlLabel
              {...register("difficulty")}
              value="Dificil"
              control={<Radio />}
              label="Dificíl"
            />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained">
          Criar Grupo
        </Button>
      </form>
    </ModalGroupsGoalDiv>
  );
};

/*
 "title": "Nenhuma falta na academia cometida pelos membros do grupo na semana",
  "difficulty": "Díficil",
  "how_much_achieved": 100,
  "achieved": false,
  "group": 3
*/
