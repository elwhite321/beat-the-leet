const longestConsecutive = function (nums) {
  const sortedArray = nums.sort((a, b) => a - b);
  let max = 0;
  let current = 1;
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (sortedArray[i + 1] - sortedArray[i] === 1) {
      current += 1;
    } else if (sortedArray[i + 1] === sortedArray[i]) {
      continue;
    } else {
      max = Math.max(max, current);
      current = 1;
    }
  }
  return max;
};
