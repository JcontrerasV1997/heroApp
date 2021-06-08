import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  
  const history = useHistory();
  const handleLogout = () => {
    history.replace("/login");
    dispatch({
      type: types.logout,
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/marvelhero"
              >
                Heroes Marvel
              </NavLink>

              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/dchero"
              >
                Heroes de dc
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/search"
              >
                Search
              </NavLink>
            </ul>

            <span className="navbar-text ml-3" style={{ marginRight: 24 }}>
              {name}
            </span>
            <span className="navbar-text">
              <button className="nav-item nav-link btn" onClick={handleLogout}>
                Logout
              </button>
            </span>
          </div>
        </div>
      </nav>
      <br />
    </>
  );
};
