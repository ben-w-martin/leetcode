// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

var maxSubArray = function (nums) {
  let subArray = [];
  let left = 0;
  let right = 1;
  let max = -Infinity;

  while (left < nums.length - 1) {
    const sum = eval([...nums.slice(left, right)].join("+"));
    console.log([...nums.slice(left, right)]);
    console.log(sum);
    const prevMax = max;
    max = sum > max ? sum : max;
    subArray = prevMax === max ? subArray : nums.slice(left, right);

    if (max > prevMax) {
      right++;
    } else {
      left++;
    }

    if (left === right) right++;
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
