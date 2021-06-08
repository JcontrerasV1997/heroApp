import React from "react";
import { HeroList } from "./HeroList";

export const MarvelScreen = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img className="img-fluid" src="./assets/thor.png" alt="" />
        <img
          className="img-fluid"
          src="./assets/frankensteins_monster_100px.png"
          alt=""
        
        />
        <img
          className="img-fluid"
          src="./assets/spider-man_head_100px.png"
          alt=""
          
        />
        <img
          className="img-fluid"
          src="./assets/iron_man_100px.png"
          alt=""
        
        />
      </div>
      
      <hr />
      <HeroList publisher="Marvel Comics"></HeroList>
      <hr />
    </div>
  );
};
