var productExceptSelf = function (nums) {
  const length = nums.length;
  const arr = new Array(length).fill(1);
  const result = [];

  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < length + 1; i++) {
    leftArr[i] = nums[i] * arr[i - 1];
  }

  for (let i = 0; i < length; i++) {
    rightArr[i] = nums[i] * arr[i];
    arr[i] = rightArr[i] * nums[i + 1];
  }

  for (let i = 0; i < length; i++) {
    result[i] = leftArr[i] * rightArr[i];
  }

  console.log("arr", arr);
  console.log("left", leftArr);
  console.log("right", rightArr);

  return result;
};

console.log(productExceptSelf([4, 3, 2, 1, 2]));
