var twoSum = function(nums, target) {
    
    let complimentHashMap = {};
    
    for(let i=0; i < nums.length; i++ ){
        
        var compliment = target - nums[i];
        
        if(complimentHashMap[nums[i]]){
            var indexOfCompliment = nums.indexOf(compliment);
             return [indexOfCompliment ,i];   
           
        }else {
            complimentHashMap[compliment] = true;
        }
        
    }
    
    return [0,0];
}
nums = [20, 12, 3, 4, 1, 5, 4,26, 34, 13, 5 , 15, 12, 0.7, 8]
console.log(twoSum(nums, 10));