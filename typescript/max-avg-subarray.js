"use strict";
function findMaxAverage(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let max = getMax(-Infinity, sum);
    if (k < nums.length) {
        for (let i = 1; i < nums.length; i++) {
            sum -= nums[i - 1];
            sum += nums[i + k - 1];
            max = getMax(max, sum);
            if (typeof nums[i + k] !== 'number')
                break;
        }
    }
    return max;
    function getMax(maximum, arraySum) {
        let average = arraySum / k;
        let newMax = maximum > average ? maximum : average;
        return newMax;
    }
}
const arr = [6, 8, 6, 8, 0, 4, 1, 2, 9, 9];
console.log(findMaxAverage(arr, 2));
