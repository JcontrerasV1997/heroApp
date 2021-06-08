import React from "react";
import { Link } from "react-router-dom";
import "./heroCardStyle.css";
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ">
      <div className="card-header " id="header">
        <figure class="figure ">
          <img
            id="hero"
            className="figure-img img-fluid animate__backInDown"
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
          ></img>
        </figure>
      </div>
      <div className="card-content">
        <strong className="card-title animated-bg animated-bg-text" id="title">
          {superhero}
        </strong>

        <p className="card-excerpt" id="excerpt">
          {alter_ego}
          <br />
          <small className="text-muted">
           <strong>{first_appearance}</strong> 
          </small>
        </p>
     <Link to={`./hero/${id}`}>MAS</Link>
      
      </div>
    </div>
  );
};
