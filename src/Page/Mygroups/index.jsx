import { useContext, useEffect, useState } from "react";
import { HeaderDashboar } from "../../Components/HeaderDashBoard";
import { api } from "../../Services/api";
import { ListCardsGroupsInscritos } from "../../Components/CardsGroupsInscrito";
import { PageGroupsContext } from "../../Context/PageGroupsContext";
import { MainMyGroups } from "./style";

export const Mygroups = () => {
  const {
    setIsModalGroupEdite,
    setGetIdEditeGroups,
    handleDeleGroups,
    handleUnSubscribeGroups,
    handleSubscribeGroups,
    changeGetIdGroupsGoals,
    isSrcTrue,
  } = useContext(PageGroupsContext);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token")) || ""
  );

  const [mygroups, setMyGroups] = useState([]);

  const getMyGroups = () => {
    api
      .get(`/groups/subscriptions/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setMyGroups(response.data));
  };

  console.log(mygroups);

  useEffect(() => {
    getMyGroups();
  }, []);

  return (
    <>
      <HeaderDashboar />

      <MainMyGroups>
        <ul>
          {mygroups.map((elem) => (
            <ListCardsGroupsInscritos
              name={elem.name}
              description={elem.description}
              users_on_group={elem.users_on_group}
              goals={elem.goals}
              creator={elem.creator}
              activities={elem.activities}
              isModalGroupEdite={elem.isModalGroupEdite}
              id={elem.id}
              category={elem.category}
              color={elem.id}
              setIsModalGroupEdite={setIsModalGroupEdite}
              setGetIdEditeGroups={setGetIdEditeGroups}
              handleDeleGroups={handleDeleGroups}
              handleUnSubscribeGroups={handleUnSubscribeGroups}
              handleSubscribeGroups={handleSubscribeGroups}
              changeGetIdGroupsGoals={changeGetIdGroupsGoals}
              isSrcTrue={isSrcTrue}
              getMyGroups={getMyGroups}
            />
          ))}
        </ul>
      </MainMyGroups>
    </>
  );
};
