import React from "react";
import { HeroList } from './HeroList'

export const DcScreen = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img className="img-fluid" src="./assets/green_lantern_dc_100px.png" alt="" srcset="" />
        <img
          className="img-fluid"
          src="./assets/batman_100px.png"
          alt=""
      
        />
        <img
          className="img-fluid"
          src="./assets/lightning_bolt_100px.png"
          alt=""
       
        />
        <img
          className="img-fluid"
          src="./assets/superman_100px.png"
          alt=""
       
        />
      </div>
      <hr />
      <HeroList publisher="DC Comics"></HeroList>
      <hr />
    </div>
  );
};
