var moveZeroes = function (nums) {
  const numsLength = nums.length;
  let count = 0;

  for (let i = 0; i < numsLength * 2; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < numsLength; i++) {
    nums[i] = 0;
  }
};

moveZeroes([0, 0, 1]);
