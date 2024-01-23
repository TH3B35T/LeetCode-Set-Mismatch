/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    let n = nums.length;

    let duplicate, missing;

    let seen = new Set();

    for(let num of nums){
        if(seen.has(num)){
            duplicate = num;
        } else{
            seen.add(num);
        }
    }

    // Calculate the expected sum of numbers from 1 to n
    const expectedSum = n * (n + 1) / 2;

    // Calculate the sum of unique numbers in seen
    let seenSum = 0;
    for(let num of seen){
        seenSum += num;
    }
    missing = expectedSum - seenSum

    return [duplicate, missing]
   
};
