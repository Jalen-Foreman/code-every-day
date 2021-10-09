# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
# Find a group of numbers of any length that returns the largest sum
# max_subarray([-2,1,-3,4,-1,2,1,-5,4]) // 6 
# max_subarray([5,4,-1,7,8]) // 23
# max_subarray([1]) // 1
# max_subarray([]) // return null
# max_subarray({}) // return null

def max_subarray(list):
    # find the middle value of array and get every index from the right/left and place into another empty array
    # find the middle of those arrays and create other subarrays
    # add each number and print sum
