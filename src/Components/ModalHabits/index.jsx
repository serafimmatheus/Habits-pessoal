import { ModalHabitsDiv } from "./style";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiXSquare } from "react-icons/fi";
import { PageHabitsContext } from "../../Context/PageHabitosContext";
import Slider from "@mui/material/Slider";

export const ModalHabits = ({ setIsModalHabits, isModalHabits }) => {
  const { handleSubmitHabits } = useContext(PageHabitsContext);

  const schema = yup.object().shape({});

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const PageSubmitHabits = (data) => {
    handleSubmitHabits(data);
  };

  return (
    <ModalHabitsDiv isModalHabits={isModalHabits}>
      <form onSubmit={handleSubmit(PageSubmitHabits)}>
        <div>
          <h2>Cadastro de hábitos</h2>
          <p onClick={() => setIsModalHabits(!isModalHabits)}>
            <FiXSquare />
          </p>
        </div>
        <TextField
          {...register("title")}
          fullWidth
          label="Titulo"
          id="fullWidth"
        />

        <FormControl sx={{ margin: "20px 0" }} component="fieldset">
          <FormLabel component="legend">Categoria</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              {...register("category")}
              value="saude"
              control={<Radio />}
              label="Saúde"
            />
            <FormControlLabel
              {...register("category")}
              value="esporte"
              control={<Radio />}
              label="Esporte"
            />
            <FormControlLabel
              {...register("category")}
              value="tecnologia"
              control={<Radio />}
              label="Tecnologia"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Dificuldade</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              {...register("difficulty")}
              value="facil"
              control={<Radio />}
              label="Facil"
            />
            <FormControlLabel
              {...register("difficulty")}
              value="medio"
              control={<Radio />}
              label="Médio"
            />
            <FormControlLabel
              {...register("difficulty")}
              value="dificil"
              control={<Radio />}
              label="Dificil"
            />
          </RadioGroup>
        </FormControl>

        <FormControl sx={{ margin: "20px 0" }} component="fieldset">
          <FormLabel component="legend">Frequência</FormLabel>

          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              {...register("frequency")}
              value="diaria"
              control={<Radio />}
              label="Diária"
            />
            <FormControlLabel
              {...register("frequency")}
              value="semanal"
              control={<Radio />}
              label="Semanal"
            />
            <FormControlLabel
              {...register("frequency")}
              value="mensal"
              control={<Radio />}
              label="Mensal"
            />

            <FormControlLabel
              {...register("frequency")}
              value="trimensal"
              control={<Radio />}
              label="Trimensal"
            />
          </RadioGroup>
        </FormControl>

        <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          valueLabelDisplay="auto"
          {...register("how_much_achieved")}
        />

        <Button type="submit" variant="contained">
          Criar hábito
        </Button>
      </form>
    </ModalHabitsDiv>
  );
};
