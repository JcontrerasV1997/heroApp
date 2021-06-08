import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroeById } from "../../helpers/getHeroById";
import "./heroScreenStyle.css";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero =useMemo(() => getHeroeById(heroeId), [heroeId]) ;

  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
    }
    history.goBack("/");
  };

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div>
     <hr />

      <div class="cards-wrapper">
        <div class="card animate__backInDown" data-tilt>
          <div class="card-img-wrapper">
            <img src={`../assets/heroes/${id}.jpg`} alt={superhero} />
          </div>
          <div class="card-info">
            <h2>{superhero}</h2>
            <h2>
              {alter_ego !== characters && (
                <p className="card-excerpt">{characters}</p>
              )}
            </h2>
            <p id="info">
              {alter_ego}
              <br />
              {publisher}
            </p>
            <button onClick={handleReturn}>Regresar</button>
          </div>
        </div>
      </div>
      
      <hr />
    </div>
  );
};
