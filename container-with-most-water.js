var maxArea = function (height) {
  let max = 0;
  const heightLength = height.length;

  for (let i = 0; i < heightLength - 1; i++) {
    let compare = i + 1;
    for (let j = 0; j < heightLength - (i + 1); j++) {
      let area =
        height[i] > height[compare]
          ? height[compare] * (compare - i)
          : height[i] * (compare - i);
      if (area > max) max = area;
      compare++;
    }
  }

  return max;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
