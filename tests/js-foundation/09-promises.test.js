import { getHeroByIDAsync } from "../../src/js-foundation/09-promises";

describe("Unit test for promises", () => {
  test("getHeroByIDAsync fn must return a hero", () => {
    const id = 1;
    
    return getHeroByIDAsync(id)
      .then((hero) => {
        expect(hero).toHaveProperty('id', id);
      });
  });

  test("getHeroByIDAsync fn must return an error message (string) if no hero is found", () => {
    const id = 'fake-id';

    return getHeroByIDAsync(id)
      .catch((error) => {
        expect(error).toStrictEqual(expect.any(String));
      });
  });
});