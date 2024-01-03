import owners from "../../src/data/heroes";
import { getHeroByID, getHeroesByOwner } from "../../src/js-foundation/08-import-export";

describe("Unit test for import-export", () => {
  test("getHeroByID fn must return a hero with a given id", () => {
    const id = 3;
    const hero = getHeroByID(id);

    expect(hero).toHaveProperty('id', id);
  });

  test("getHeroByID fn must return undefined if hero with given id is not found", () => {
    const id = 10;
    const hero = getHeroByID(id);

    expect(hero).toBe(undefined);
  });

  test("getHeroesByOwner fn must return an array of heroes filtered by owner", () => {
    const [marvel, dc] = owners;
    const marvelHeroes = getHeroesByOwner(marvel);
    const dcHeroes = getHeroesByOwner(dc);
    
    marvelHeroes.forEach(hero => {
      expect(hero).toHaveProperty('owner', marvel);
    });

    dcHeroes.forEach(hero => {
      expect(hero).toHaveProperty('owner', dc);
    });
  });

  test("getHeroesByOwner fn must return an empty array if no heroes are found", () => {
    const heroes = getHeroesByOwner();
    
    const heroesExpected = [];

    expect(heroes).toStrictEqual(heroesExpected);
  });
});