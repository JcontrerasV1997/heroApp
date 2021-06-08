import React, { useEffect } from 'react'
import { useReducer } from "react";
import { authReducer } from "../auth/authReducer";

export const HookAuth = () => {
    const init= () =>{
        return JSON.parse(localStorage.getItem('user'))|| {logged:false}
    } 

    const [user, dispatch]  = useReducer(authReducer, {}, init)
    
    useEffect(() => {
        localStorage.setItem ("user", JSON.stringify(user));
      }, [user]);

    return [ user, dispatch]; 
}
