import TextField from "@mui/material/TextField";
import { MainLogin } from "./style";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Context/PageLoginContex";
import { useContext } from "react";

export const Login = () => {
  const { handleLogin } = useContext(LoginContext);

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório.")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras"),
    password: yup.string().required("campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLoginSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <MainLogin>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <TextField
          className="teste"
          fullWidth
          label="UserName"
          id="fullWidth"
          {...register("username")}
        />
        {errors.username?.message}
        <TextField
          className="teste"
          type="password"
          fullWidth
          label="Password"
          id="fullWidth"
          {...register("password")}
        />
        {errors.password?.message}

        <Button type="submit" variant="outlined">
          Logar
        </Button>

        <div className="options-login">
          Não tem cadastro?
          <Link className="link" to="/register">
            <span>Cadastrar-se.</span>
          </Link>
        </div>
      </form>
    </MainLogin>
  );
};
