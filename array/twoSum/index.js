export const twoSum = (nums, target) => {
  let results = [];

  nums.some((num, index) => {
    const diff = target - num;

    nums[index] = null;
    const secondIndex = nums.indexOf(diff);

    if (secondIndex === -1 || secondIndex == index) {
      return false;
    }

    results.push(index, secondIndex);

    return true;
  });

  return results;
};
