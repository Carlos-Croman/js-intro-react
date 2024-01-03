import { getRandomQuote } from "../../src/js-foundation/11-async-await";

describe("Unit test for async-await", () => {
  test("getRandomQuote fn must return an object with quote and author properties", async () => {
    const quote = await getRandomQuote();

    const expectedQuote = {
      quote: expect.any(String),
      author: expect.any(String)
    }

    expect(quote).toMatchObject(expectedQuote);
  });
});