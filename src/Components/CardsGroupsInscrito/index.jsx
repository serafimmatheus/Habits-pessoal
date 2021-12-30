import { useHistory } from "react-router-dom";
import { CardGroupsInscritos } from "./style";

export const ListCardsGroupsInscritos = ({
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
  getMyGroups,
}) => {
  const history = useHistory();

  return (
    <CardGroupsInscritos>
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

          <button
            onClick={() => {
              handleUnSubscribeGroups(id);
              getMyGroups();
            }}
          >
            desInscrever-se
          </button>

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
    </CardGroupsInscritos>
  );
};
