import { cristianoRonaldoNicknames, greeting } from "../../src/js-foundation/07-array-destructuring";

describe("Unit test for array destructuring", () => {
  test("cristianoRonaldoNicknames fn must return a string array", () => {
    const cristianoNicknames = cristianoRonaldoNicknames();

    const expectedNicknames = ["El Bicho", "CR7"];

    for (let index = 0; index < cristianoNicknames.length; index++) {
      const element = cristianoNicknames[index];
      expect(element).toStrictEqual(expect.any(String));
    }

    expect(cristianoNicknames).toStrictEqual(expect.arrayContaining(expectedNicknames)); // matches a received array which contains elements that are not in the expected array
  });

  test("greeting fn must return an array with a given name and a function", () => {
    const fullname = "Carlos";
    const [name, setGreeting] = greeting(fullname);

    const expectedGreeting = [expect.any(String), expect.any(Function)];

    expect([name, setGreeting]).toStrictEqual(expect.arrayContaining(expectedGreeting));
  });
});