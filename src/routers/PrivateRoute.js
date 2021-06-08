import React, { useEffect } from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
    
  useEffect(() => {
    localStorage.setItem("lastPath", rest.location.pathname);
    return () => {};
  }, [rest.location.pathname]);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login"></Redirect>
      }
    ></Route>
  );
};

PrivateRoute.protoTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
