var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    console.log(left, right);
    if (nums[right] >= target) right--;
    if (nums[left] >= target) left++;
    if (nums[left] + nums[right] === target) return [left, right];
    else {
      left++;
      right--;
    }
  }
};

twoSum([2, 7, 11, 15], 9);
