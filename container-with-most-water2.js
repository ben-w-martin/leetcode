var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    const area =
      height[left] > height[right]
        ? height[right] * (right - left)
        : height[left] * (right - left);

    height[left] > height[right] ? right-- : left++;

    max = area > max ? area : max;
  }
  console.log(max);
  return max;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
