import { Switch } from "react-router-dom";
import { Route } from "./Routes";
import { Home } from "../Page/Home";
import { Login } from "../Page/login/index";
import { Register } from "../Page/Register/index";
import { PageHabits } from "../Page/PageHabits/index";
import { PageGroups } from "../Page/PageGroups";
import { PageGroupsGoals } from "../Page/PageGroupsGoals";
import { PageGroupsActives } from "../Page/PageActives";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" isPrivate component={PageHabits} />
      <Route exact path="/dashboard/groups" isPrivate component={PageGroups} />
      <Route
        exact
        path="/dashboard/groups/goals"
        isPrivate
        component={PageGroupsGoals}
      />
      <Route
        exact
        path="/dashboard/groups/actives"
        isPrivate
        component={PageGroupsActives}
      />
    </Switch>
  );
};
