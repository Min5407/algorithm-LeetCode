import { maxProfit } from ".";

// toStrictEqual is used for deep equality

describe("Best time to buy and sell stock success", () => {
  test("test 1", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const result = 5;

    expect(maxProfit(prices)).toStrictEqual(result);
  });

  test("test 2", () => {
    const prices = [7, 6, 4, 3, 1];
    const result = 0;

    expect(maxProfit(prices)).toStrictEqual(result);
  });
});
