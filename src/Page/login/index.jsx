import {
  MainLogin,
  BoxApresentationForm,
  W50,
  Form,
  CssTextField,
  BootstrapButton,
} from "./style";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Context/PageLoginContex";
import { useContext } from "react";
import art from "../../Assets/Art.png";

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
      <BoxApresentationForm>
        <W50>
          <img src={art} alt="Art.png" />
        </W50>

        <W50>
          <Form>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(handleLoginSubmit)}>
              <CssTextField
                className="teste"
                fullWidth
                label="UserName"
                id="fullWidth"
                {...register("username")}
              />
              {errors.username?.message}
              <CssTextField
                className="teste"
                type="password"
                fullWidth
                label="Password"
                id="fullWidth"
                {...register("password")}
              />
              {errors.password?.message}

              <Button
                sx={{ color: "white", border: "1px solid white" }}
                type="submit"
                variant="outlined"
              >
                Logar
              </Button>

              <div className="options-login">
                Não tem cadastro?
                <Link className="link" to="/register">
                  <span>Cadastrar-se.</span>
                </Link>
              </div>
            </form>
          </Form>
        </W50>
      </BoxApresentationForm>
    </MainLogin>
  );
};

// sx={{
//   backgroundColor: "#3949AB",
//   color: "white",
//   borderColor: "white",
// }}
