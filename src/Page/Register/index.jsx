import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import art from "../../Assets/Art.png";
import { Button } from "@mui/material";
import { MainRegister, BoxImgRegister } from "./style";
import { api } from "../../Services/api";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/User";
import { toast } from "react-toastify";
import { CssTextField } from "../login/style";

export const Register = () => {
  const history = useHistory();

  const { setNameUser } = useContext(UserContext);

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
    password: yup
      .string()
      .min(6, "Minimo 6 caracters")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "Senha deve conter numeros, letras, uma letra MAIÚSCULA e um caracter especial ex:(!@#$%&*)."
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compatível.")
      .required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = ({ username, email, password }) => {
    const register = { username, email, password };
    api
      .post("/users/", register)
      .then((response) => {
        setNameUser(response);
        toast.success("Usuário registrado com sucesso!");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Algo deu errado!");
      });
  };

  return (
    <MainRegister>
      <div>
        <BoxImgRegister>
          <img src={art} alt="Art.png" />
        </BoxImgRegister>
        <form onSubmit={handleSubmit(handleRegister)}>
          <h2>Registrar-se</h2>
          <CssTextField
            sx={{ marginTop: "10px" }}
            fullWidth
            label="UserName"
            id="fullWidth"
            {...register("username")}
          />
          {errors.username?.message}
          <CssTextField
            sx={{ marginTop: "10px" }}
            fullWidth
            label="E-mail"
            id="fullWidth"
            type="email"
            {...register("email")}
          />
          {errors.email?.message}

          <CssTextField
            sx={{ marginTop: "10px" }}
            fullWidth
            label="Senha"
            id="fullWidth"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}

          <CssTextField
            sx={{ marginTop: "10px" }}
            fullWidth
            label="Confirmar Senha"
            id="fullWidth"
            type="password"
            {...register("confirm_password")}
          />
          {errors.confirm_password?.message}

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
            Registrar
          </Button>
          <div className="options-register">
            Já tem cadastro?
            <Link className="link" to="/login">
              <span>Login.</span>
            </Link>
          </div>
        </form>
      </div>
    </MainRegister>
  );
};
