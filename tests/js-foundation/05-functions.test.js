import { getActiveUser, getUser } from "../../src/js-foundation/05-functions";

describe("Unit test for functions", () => {
  test("getUser fn must return a user (object) with id and username properties", () => {
    const user = getUser();

    const expectedUser = { id: "ABC123", username: "CromanDev" };

    expect(user).toStrictEqual(expectedUser);
  });

  test("getActiveUser fn must return a user (object) with the argument id passed as the property user.id", () => {
    const userID = 1;
    const userActive = getActiveUser(userID);

    const expectedUser = { id: userID, username: "UserABC123" };

    expect(userActive).toStrictEqual(expectedUser);
  });
});