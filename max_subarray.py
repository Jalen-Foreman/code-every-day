# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
# Find a group of numbers of any length that returns the largest sum
# max_subarray([-2,1,-3,4,-1,2,1,-5,4]) // 6 
# max_subarray([5,4,-1,7,8]) // 23
# max_subarray([1]) // 1
# max_subarray([]) // return null
# max_subarray({}) // return null

def max_subarray(list):
    # set max current and max global as first index
    max_current = list[0]
    max_global = list[0]
    # loop throught list
    # Starting from index of 1
    for i in range(1, len(list)):
    # if the current element is greater than the current element plus max current, set max current to current element else, set it to the current element plus max current
        max_current = max(list[i], list[i] + max_current)
    # if the maxcurrent is greater than max global, set max global to max current
        if max_current > max_global:
            max_global = max_current
    # return max global
    return max_global


print(max_subarray([5, 4, -1, 7, 8]))
print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
