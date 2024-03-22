/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  flowerbed.map((plot, i, arr) => {
    if (arr[i - 1] != 1 && arr[i + 1] != 1 && plot != 1) {
      arr.splice(i, 1, 1);
      count++;
    } else if (!arr[i - 1] && arr[i + 1] != 1 && plot != 1) {
      count++;
    } else if (arr[i - 1] != 1 && !arr[i + 1] && plot != 1) {
      count++;
    }
  });

  return count >= n;
};

let flowerbed = [0, 0, 1, 0, 0],
  n = 1;

console.log(canPlaceFlowers(flowerbed, n));
