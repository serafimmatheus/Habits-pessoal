import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { GetIdGroupsGoalsContext } from "../IdGroupsGoals";

export const PageGroupsContext = createContext();

export const PageGroupsProvider = ({ children }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits-Pessoal:Token")) || ""
  );

  const { changeGetIdGroupsGoals } = useContext(GetIdGroupsGoalsContext);

  const [isModalGroup, setIsModalGroup] = useState(false);

  const [isModalGroupEdite, setIsModalGroupEdite] = useState(false);

  const [getIdEditeGroups, setGetIdEditeGroups] = useState();

  const [isSrcTrue, setIsSrcTrue] = useState(false);

  const [changeColorLi, setChangeColorLi] = useState(false);

  const [isSubscribe, setIsSubscribe] = useState(false);

  const [listGroups, setListGroups] = useState([]);

  const [nextpage, setNextpage] = useState(1);

  const [srcGroups, setSrcGroups] = useState("");

  const [newListGroups, setNewListGroups] = useState([]);

  const handleNextPage = () => {
    setNextpage(nextpage + 1);
    handleGroups();
  };

  const handleBeforePage = () => {
    if (nextpage > 1) {
      setNextpage(nextpage - 1);
      handleGroups();
    }
  };

  const handleGroups = () => {
    api
      .get(`/groups/?page=${nextpage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListGroups(response.data.results);
      });
  };

  const handleFilterGroups = () => {
    api
      .get(`/groups/?search=${srcGroups}`)
      .then((response) => setNewListGroups(response.data.results))
      .then((err) => console.log(err));
  };

  const handleSubscribeGroups = (id) => {
    api
      .post(
        `/groups/${id}/subscribe/`,
        { null: null },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Cadastrado");
        handleGroups();
      })
      .catch((err) => {
        toast.error("Já é cadastrado");
      });
  };

  const handleUnSubscribeGroups = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Desincrito do grupo");
        handleGroups();
      })
      .catch((err) => {
        toast.error("Não foi possivel sair do grupo");
      });
  };

  const handleDeleGroups = (id) => {
    api
      .delete(`/groups/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Grupo removido");
        handleGroups();
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };

  const handleEditeGroups = (data) => {
    api
      .patch(`/groups/${getIdEditeGroups}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Grupo Editado");
        setIsModalGroupEdite(!isModalGroupEdite);
        handleGroups();
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };
  return (
    <PageGroupsContext.Provider
      value={{
        changeGetIdGroupsGoals,
        isModalGroup,
        setIsModalGroup,
        isModalGroupEdite,
        setIsModalGroupEdite,
        getIdEditeGroups,
        setGetIdEditeGroups,
        isSrcTrue,
        setIsSrcTrue,
        changeColorLi,
        setChangeColorLi,
        isSubscribe,
        setIsSubscribe,
        listGroups,
        setListGroups,
        nextpage,
        setNextpage,
        srcGroups,
        setSrcGroups,
        newListGroups,
        setNewListGroups,
        handleNextPage,
        handleBeforePage,
        handleGroups,
        handleFilterGroups,
        handleSubscribeGroups,
        handleUnSubscribeGroups,
        handleDeleGroups,
        handleEditeGroups,
      }}
    >
      {children}
    </PageGroupsContext.Provider>
  );
};
