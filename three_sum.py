# return all triplets in data set that add up to zero. the numbers in the triplet set can not be of the same index.

# three_sum([-1,0,1,2,-1,-4]) // [[-1,-1,2],[-1,0,1]]


def three_sum(nums):
    # create result array
    res = []
    # sort nums array
    nums.sort()
    # loop through array by using enumerate which contains the index and value each loop
    for i, a in enumerate(nums):
        # if the curr elem is equal to the prev elem, continue loop which eleminates duplicates
        if i > 0 and a == nums[i - 1]:
            continue
        # left pointer is on the left side of array and right pointer is on the end of the array
        l, r = i + 1, len(nums) - 1
        # while left pointer doesn't equal right pointer
        while l < r:
            # calculate sum of all the curr elems
            threeSum = a + nums[l] + nums[r]
            # if the sum is greater than zero, decrement the right pointer
            if threeSum > 0:
                r -= 1
            # if the sum is less than zero, increment the left pointer
            elif threeSum < 0:
                l += 1
            else:
            # if the sum is equal to zero then append them onto result array in a subarray
                res.append([a, nums[l], nums[r]])
            # continue to increment left pointer
                l += 1
            # Example: ([-2,-2,0,0,2,2]|| in this array, if you increment the left pointer so there will be no duplicates, there would be no need to do the same for right pointer because the conditions above solve that problem)
            # while nums is not equal to the prev element and left is less than right, increment left
                while nums[l] == nums[l-1] and l < r:
                    l += 1
    # return result
    return res


print(three_sum([-1, 0, 1, 2, -1, -4]))
