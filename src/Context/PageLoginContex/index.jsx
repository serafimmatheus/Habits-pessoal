import { createContext } from "react";
import { api } from "../../Services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();

  const handleLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@Habits-Pessoal:Token", JSON.stringify(access));
        toast.success("Logado");
        history.push("/dashboard");
      })
      .catch((_) => {
        toast.error("Login/Senha inválido!");
      });
  };
  return (
    <LoginContext.Provider value={{ handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
