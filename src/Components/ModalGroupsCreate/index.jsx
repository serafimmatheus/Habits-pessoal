import { ModalGroupsDiv } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/api";
import { FiXSquare } from "react-icons/fi";
import { toast } from "react-toastify";

export const ModalGroupsCreate = ({
  isModalGroup,
  setIsModalGroup,
  handleGroups,
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token")) || ""
  );

  const schema = yup.object().shape({});

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitGroups = (data) => {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Grupo criado");
        setIsModalGroup(false);
        handleGroups();
      })
      .catch((err) => {
        toast.error("Grupo já existe");
      });
  };

  return (
    <ModalGroupsDiv isModalGroup={isModalGroup}>
      <form onSubmit={handleSubmit(handleSubmitGroups)}>
        <div>
          <h2>Cadastro de Grupos</h2>
          <p
            onClick={() => {
              setIsModalGroup(!isModalGroup);
            }}
          >
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
          Criar Grupo
        </Button>
      </form>
    </ModalGroupsDiv>
  );
};
