var findPeakElementRecursive = function (nums, ini, end) {
  var mid = Math.floor((ini + end) / 2);

  // base case, found the peak!
  var prev = mid > 0 ? nums[mid - 1] : Number.NEGATIVE_INFINITY;
  var next = mid < nums.length - 1 ? nums[mid + 1] : Number.NEGATIVE_INFINITY;

  if (nums[mid] > prev && nums[mid] > next) return mid;

  if (nums[mid] < next) {
    // numbers go up in the right, search there
    return findPeakElementRecursive(nums, mid + 1, end);
  } else {
    return findPeakElementRecursive(nums, ini, mid - 1);
  }
};
