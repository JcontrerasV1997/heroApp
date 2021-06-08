import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { HookForm } from "../../hooks/HookForm";
import { HeroCard } from "../smarts/HeroCard";
import "./searchStyle.css";
import { getHeroesByName } from "../../helpers/getHeroByName";
export const Search = ({ history }) => {
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const [values, handleInputChange] = HookForm({
    searchText: q,
  });
  const { searchText } = values;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${searchText}`)
  };
  return (
    <div>
      <div class="d-flex justify-content-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Find your hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary"
          >
            Search...
          </button>
        </form>
      </div>
      <hr />
      {
        ((q === '')) && <div className="alert alert-info">
          Busca tu heroe
        </div>

      }
      {
        (q !== '' && heroesFiltered.length === 0)
        &&
        <div className="alert alert-danger">
          no se encuentra el heroe
        </div>

      }


      {
        heroesFiltered.map(hero => (
          <div class="cards-wrapper" key={hero.id}>
            <div class="card animate__backInDown" data-tilt>
              <div class="card-img-wrapper">
                <img src={`../assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
              </div>
              <div class="card-info">
                <h2>{hero.superhero}</h2>
                <h2>
                  {hero.alter_ego !== hero.characters && (
                    <p className="card-excerpt">{hero.characters}</p>
                  )}
                </h2>
                <p id="info">
                  {hero.alter_ego}
                  <br />
                  {hero.publisher}
                </p>
              </div>
            </div>
          </div>
        ))
      }
      <hr />


    </div>
  );
};
