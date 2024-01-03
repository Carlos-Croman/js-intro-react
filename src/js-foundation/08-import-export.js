/* Default import and named import */
import owners, { heroes } from '../data/heroes';

const [, DC] = owners;

// exports the function which makes it importable in another file
export function getHeroByID(id) {
  return heroes.find((hero) => hero.id === id);
}

const hero = getHeroByID(2) ?? 'Hero not found';

// console.log(hero);

export function getHeroesByOwner(owner) {
  return heroes.filter((hero) => hero.owner === owner);
}

const heroesByOwner = getHeroesByOwner(DC) ?? 'Heroes not found';

// console.log(heroesByOwner);