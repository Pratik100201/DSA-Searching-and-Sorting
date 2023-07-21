var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = nums.length;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
      ans = mid;
    }
  }
  return ans;
};
