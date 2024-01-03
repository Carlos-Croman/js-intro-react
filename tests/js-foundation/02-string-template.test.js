import { greet, presentation } from "../../src/js-foundation/02-string-template";

describe("Unit test for string template", () => {
  test("greet fn must return a greeting (string) with the passed $name argument", () => {
    const name = "CromanDev";
    const greeting = greet(name);
    
    const greetingExpected = `Hi, ${name}`;
    
    expect(greeting).toStrictEqual(expect.any(String));
    expect(greeting).toBe(greetingExpected);
  });

  test("presentation fn must return a presentation (string) with the args $fullname and $degree passed", () => {
    const fullname = "Carlos Castro";
    const degree = "Computer Systems Engineer";
    const presentationResult = presentation({ fullname, degree });

    const presentationExpected = `Hi, i'm ${fullname}, and i'm a ${degree}.`;

    expect(typeof presentationResult).toBe('string');
    expect(presentationResult).toBe(presentationExpected);
  });
});