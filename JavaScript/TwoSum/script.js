function findAllTwoSums(nums, target) {
    let allMatches = []; // This is our container

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            
            if (nums[i] + nums[j] === target) {
                // Instead of leaving, we save the result and keep looking
                allMatches.push([i, j]); 
            }
        }
    }
    
    return allMatches; // Finally, return the whole list of matches
}
console.log(findAllTwoSums([2, 7, 1, 9, 11, 4, 5, 15], 9));