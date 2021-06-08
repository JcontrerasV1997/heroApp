import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({history}) => {
  const {dispatch} = useContext(AuthContext);
  
    const handleLogin=()=>{
      const lastPath= localStorage.getItem('lastPath')||'/';
      dispatch({
        type: types.login,
        payload:{
          name:'juan'
        }
      })
      
      history.replace(lastPath);

    }
  return (
    <div>
      <h1>Login screen</h1>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <button onClick={handleLogin} className="btn btn-lg btn-success ">
          <span>
            Dashboard
            <br />
            <small>Entrar al Dashboard</small>
          </span>
        </button>
      </div>
    </div>
  );
};
