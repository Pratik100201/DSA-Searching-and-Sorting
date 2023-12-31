var twoSum = function (numbers, target) {
  let n = numbers.length;
  for (let l = 0; (r = n - 1); l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum == target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [-1, -1];
};
