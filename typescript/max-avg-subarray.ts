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
