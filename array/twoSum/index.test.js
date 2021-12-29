import { twoSum } from ".";

// toStrictEqual is used for deep equality

describe("Two sum success", () => {
  test("test 1", () => {
    const inputList = [2, 7, 11, 15];
    const inputTarget = 9;
    const result = [0, 1];

    expect(twoSum(inputList, inputTarget)).toStrictEqual(result);
  });

  test("test 2", () => {
    const inputList = [3, 2, 4];
    const inputTarget = 6;
    const result = [1, 2];

    expect(twoSum(inputList, inputTarget)).toStrictEqual(result);
  });
  test("test 3", () => {
    const inputList = [3, 3];
    const inputTarget = 6;
    const result = [0, 1];

    expect(twoSum(inputList, inputTarget)).toStrictEqual(result);
  });
});
