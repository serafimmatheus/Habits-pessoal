import jwtDecode from "jwt-decode";
import { useState } from "react";
import { HeaderDash } from "./style";
import { FiSearch } from "react-icons/fi";
import { FcHome, FcConferenceCall, FcExport } from "react-icons/fc";
import { Link } from "react-router-dom";
import { api } from "../../Services/api";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CssTextField } from "../../Page/login/style";

export const HeaderDashboar = ({
  src,
  setSrcGroups,
  handleFilterGroups,
  setIsSrcTrue,
  isSrcTrue,
  srcGroups,
}) => {
  const [name, setName] = useState("");

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token")) || ""
  );

  const decoder = jwtDecode(token);

  const getUserName = () => {
    api
      .get(`/users/${decoder.user_id}/`)
      .then((response) => setName(response.data));
  };

  const handleExit = () => {
    localStorage.clear();
  };

  useEffect(() => {
    getUserName();
  }, []);

  const EditeProfileUser = (data) => {
    api
      .patch(`/users/${decoder.user_id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        window.location.reload();
      });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#3949AB",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório.")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
        "E-mail inválido"
      ),
    password: yup.string().min(6, "Minimo 6 caracters"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compatível.")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(EditeProfileUser)}>
            <h2>Editar usuário</h2>
            <CssTextField
              sx={{ marginTop: "10px" }}
              fullWidth
              label="UserName"
              id="fullWidth"
              {...register("username")}
            />

            <CssTextField
              sx={{ marginTop: "10px" }}
              fullWidth
              label="E-mail"
              id="fullWidth"
              type="email"
              {...register("email")}
            />

            <CssTextField
              sx={{ marginTop: "10px" }}
              fullWidth
              label="Senha"
              id="fullWidth"
              type="password"
              {...register("password")}
            />

            <CssTextField
              sx={{ marginTop: "10px" }}
              fullWidth
              label="Confirmar Senha"
              id="fullWidth"
              type="password"
              {...register("confirm_password")}
            />

            <Button
              sx={{
                border: "1px solid white",
                marginTop: "20px",
                marginBottom: "20px",
                color: "white",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              type="submit"
            >
              Editar usuário
            </Button>
          </form>
        </Box>
      </Modal>

      <HeaderDash src={src}>
        <figure>
          <img
            onClick={handleOpen}
            src="https://thumbs.dreamstime.com/b/%C3%ADcone-do-usu%C3%A1rio-do-vetor-7337510.jpg"
            alt="Usuário"
          />

          <h1>{name.username}</h1>
        </figure>

        <nav>
          <ul>
            <Link className="link" to="/dashboard">
              <li>
                <p>
                  <FcHome />
                </p>
                <p>Hábitos</p>
              </li>
            </Link>

            <Link className="link" to="/dashboard/groups">
              <li>
                <p>
                  <FcConferenceCall />
                </p>
                <p>Grupos</p>
              </li>
            </Link>

            <Link onClick={handleExit} to="/login" className="link">
              <li>
                <p>
                  <FcExport />
                </p>
                <p>Sair</p>
              </li>
            </Link>
          </ul>
        </nav>

        <div>
          <input
            type="text"
            onChange={(e) => {
              setSrcGroups(e.target.value);
            }}
            placeholder="Pesquisar Grupos"
          />

          <button
            onClick={() => {
              setIsSrcTrue(!isSrcTrue);
              handleFilterGroups();
            }}
          >
            <FiSearch />
          </button>
        </div>
      </HeaderDash>
    </>
  );
};
