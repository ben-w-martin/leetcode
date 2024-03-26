/**
 * @param {number[]} nums
 * @return {boolean}
//  */

var increasingTriplet = function (nums) {
  let result = false;

  let low = Infinity;
  let med = Infinity;
  let high = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (low >= nums[i]) low = nums[i];
    else if (med >= nums[i]) med = nums[i];
    else if (high >= nums[i]) result = true;
  }

  return result;
};

const answer = increasingTriplet([1, 5, 0, 4, 1, 3]);
console.log(answer);

// COULD NOT FIND MY OWN SOLUTION  :(
