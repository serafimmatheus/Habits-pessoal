import { MainHome } from "./style";
import { useHistory } from "react-router-dom";
import { ModalTeste } from "../../Components/ModalTeste";

export const Home = () => {
  const history = useHistory();
  return (
    <MainHome>
      <div>
        <h2>Habits</h2>

        <div className="buttons">
          <button onClick={() => history.push("/register")}>
            Cadastrar-se
          </button>

          <button onClick={() => history.push("/login")}>Logar</button>
        </div>

        {/* <ModalTeste /> */}
      </div>
    </MainHome>
  );
};
