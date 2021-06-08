import {heroes} from '../data/dataHero'

export const getHeroeById=(id) =>{
    
    return heroes.find(hero => hero.id ===id)
}