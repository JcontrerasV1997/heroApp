import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";
import { HeroCard } from "../smarts/HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="d-flex justify-content-center ml-2">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}></HeroCard>
      ))}
    </div>
  );
};
