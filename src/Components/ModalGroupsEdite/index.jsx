import { ModalGroupsEditeDiv } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiXSquare } from "react-icons/fi";
import { PageGroupsContext } from "../../Context/PageGroupsContext";

export const ModalGroupsEdite = () => {
  const { handleEditeGroups, isModalGroupEdite, setIsModalGroupEdite } =
    useContext(PageGroupsContext);

  const schema = yup.object().shape({});

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitGroupsEditePage = (data) => {
    handleEditeGroups(data);
  };

  return (
    <ModalGroupsEditeDiv isModalGroupEdite={isModalGroupEdite}>
      <form onSubmit={handleSubmit(handleSubmitGroupsEditePage)}>
        <div>
          <h2>Editar Grupo</h2>
          <p onClick={() => setIsModalGroupEdite(!isModalGroupEdite)}>
            <FiXSquare />
          </p>
        </div>

        <TextField
          {...register("name")}
          fullWidth
          label="Nome do grupo"
          id="fullWidth"
        />

        <TextField
          id="outlined-multiline-static"
          label="Descrição"
          multiline
          rows={4}
          // defaultValue="Default Value"
          {...register("description")}
        />

        <TextField
          {...register("category")}
          fullWidth
          label="Categoria"
          id="fullWidth"
        />

        <Button type="submit" variant="contained">
          Editar Grupo
        </Button>
      </form>
    </ModalGroupsEditeDiv>
  );
};
