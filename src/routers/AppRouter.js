import React, { useContext } from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/smarts/LoginScreen";
import { DashboardRoute } from "./DashboardRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
        <PublicRoute exact path="/login" component={LoginScreen} isAuth={user.logged}/>
        <PrivateRoute path="/" component={DashboardRoute} isAuth={user.logged}/>
        </Switch>
      </div>
    </Router>
  );
};
