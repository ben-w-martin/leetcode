/*
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(i, j);
      if (i !== j) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
    }
  }
};
*/

var twoSum = function (nums, target) {
  const complements = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (complements.has(diff)) return [complements.get(diff), i];

    complements.set(nums[i], i);
  }
};

const map = new Map();
console.log(twoSum([2, 7, 11, 15], 9));
