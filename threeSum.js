var threeSum = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            sum = nums[i] + nums[j]
            if (sum < 0) {
                index = nums.find(() => {
                    if(Math.abs(sum) === undefined) {
                        return 0
                    } else {
                        return Math.abs(sum)
                    }
                })
             
            }
            
        }
    }
}


