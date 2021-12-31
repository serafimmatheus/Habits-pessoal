import { useHistory } from "react-router-dom";
import { CardGroups } from "./style";
import { useState } from "react";
import jwt_decode from "jwt-decode";

export const ListCardsGroups = ({
  name,
  description,
  users_on_group,
  goals,
  creator,
  activities,
  isModalGroupEdite,
  id,
  category,
  color,
  setIsModalGroupEdite,
  setGetIdEditeGroups,
  handleDeleGroups,
  handleUnSubscribeGroups,
  handleSubscribeGroups,
  changeGetIdGroupsGoals,
  isSrcTrue,
}) => {
  const history = useHistory();

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token")) || ""
  );

  const decodi = jwt_decode(token);

  return (
    <CardGroups>
      <ul>
        {isSrcTrue ? (
          <li key={id}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Categoria: {category}</p>
            <p>Usuários inscritos: {users_on_group.length}</p>
            <p>Metas criadas: {goals.length}</p>
            <p>Atividade criadas: {activities.length}</p>
            <p>Criador: {creator.username}</p>

            <div>
              <button
                onClick={() => {
                  setIsModalGroupEdite(!isModalGroupEdite);
                  setGetIdEditeGroups(id);
                }}
              >
                Editar
              </button>
              <button onClick={() => handleDeleGroups(id)}>Remover</button>

              {users_on_group.find((elem) => elem.id === decodi.user_id) ? (
                <button
                  onClick={() => {
                    handleUnSubscribeGroups(id);
                  }}
                >
                  desInscrever-se
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleSubscribeGroups(id);
                  }}
                >
                  Inscrever-se
                </button>
              )}

              <button
                onClick={() => {
                  changeGetIdGroupsGoals(id);
                  history.push(`/dashboard/groups/${id}/goals`);
                }}
              >
                Ver metas
              </button>

              <button
                onClick={() => {
                  changeGetIdGroupsGoals(id);
                  history.push(`/dashboard/groups/${id}/actives`);
                }}
              >
                Ver atividade
              </button>
            </div>
          </li>
        ) : (
          <li key={id}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Categoria: {category}</p>
            <p>Usuários inscritos: {users_on_group.length}</p>
            <p>Metas criadas: {goals.length}</p>
            <p>Atividade criadas: {activities.length}</p>
            <p>Criador: {creator.username}</p>
            <div>
              <button
                onClick={() => {
                  setIsModalGroupEdite(!isModalGroupEdite);
                  setGetIdEditeGroups(id);
                }}
              >
                Editar
              </button>
              <button onClick={() => handleDeleGroups(id)}>Remover</button>

              {users_on_group.find((elem) => elem.id === decodi.user_id) ? (
                <button
                  onClick={() => {
                    handleUnSubscribeGroups(id);
                  }}
                >
                  desInscrever-se
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleSubscribeGroups(id);
                  }}
                >
                  Inscrever-se
                </button>
              )}

              <button
                onClick={() => {
                  changeGetIdGroupsGoals(id);
                  history.push(`/dashboard/groups/${id}/goals`);
                }}
              >
                Ver metas
              </button>

              <button
                onClick={() => {
                  changeGetIdGroupsGoals(id);
                  history.push(`/dashboard/groups/${id}/actives`);
                }}
              >
                Ver atividade
              </button>
            </div>
          </li>
        )}
      </ul>
    </CardGroups>
  );
};
