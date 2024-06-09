function findMaxAverage(nums: number[], k: number): number {
    let sum: number = 0;

    for (let i: number = 0; i < k; i++) {
        sum += nums[i]
    }
    
    let max: number = getMax(-Infinity, sum)
    
    if (k < nums.length) {
        for (let i: number = 1; i < nums.length; i++) {
            sum -= nums[i - 1]
            sum += nums[i + k - 1]
            max = getMax(max, sum)
            if (typeof nums[i + k] !== 'number') break
        }
    }

    return max

    function getMax (maximum: number, arraySum: number): number {
        let average = arraySum / k
        let newMax = maximum > average ? maximum : average
        return newMax
    }
}

const arr: number[] = [6,8,6,8,0,4,1,2,9,9]

console.log(findMaxAverage(arr, 2))

//#region OLD ATTEMPT
// function findMaxAverage(nums: number[], k: number): number {
    //     let kLengthArr: number[] = nums.slice(0, k);
    //     let sum: number = kLengthArr.reduce((acc, num) => acc + num);
    //     let avg: number = sum / k
//     let max: number = avg
//     console.log("sum: ", sum);
//     console.log("avg: ", avg);

//     for (let i: number = 1; i < nums.length; i++) {
//         if (!nums[i + 1]) break;

//         sum -= nums[i - 1];
//         sum += nums[i + 1]
//         console.log("sum: ", sum);
        
//         let avg: number = sum / k;
//         console.log("avg: ", avg);
        
//         max = max > avg ? max : avg;
//     } 

//     return max
// };
//#endregion