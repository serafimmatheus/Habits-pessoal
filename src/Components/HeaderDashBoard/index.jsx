import { useState } from "react";
import { HeaderDash } from "./style";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";

export const HeaderDashboar = ({
  src,
  setSrcGroups,
  handleFilterGroups,
  setIsSrcTrue,
  isSrcTrue,
  srcGroups,
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token")) || ""
  );

  const handleExit = () => {
    localStorage.clear();
  };

  return (
    <HeaderDash src={src}>
      <h1>nome: </h1>

      <nav>
        <ul>
          <Link className="link" to="/dashboard">
            <li>Habitos</li>
          </Link>

          <Link className="link" to="/dashboard/groups">
            <li>Grupos</li>
          </Link>

          <Link onClick={handleExit} to="/login" className="link">
            <li>
              <p>
                <ImExit />
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
  );
};
