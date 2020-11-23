import { heroes } from '../../data/heroes';

export const getHeroesById = ( id ) => {
  // .find solo retorna 1, el primero que encuentra
  return heroes.find(heroe => heroe.id === id);
  
}; 