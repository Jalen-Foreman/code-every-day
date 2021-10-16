# In this problem the args are two arrays, num1 with variable m and num2 with variable n. Variable m gives an integer which denotes that you should use up to this number of elements in the array. Variable n gives the exact number of elements you should use in the array. The function should merge the final sorted array into nums1.

# merge([1,2,3,0,0,0], 3, [2,5,6], 3) // [1,2,2,3,5,6]

def merge(nums1, m, nums2, n):
    # remove last m number of elements in arr nums1
    if m < 1:
        nums1[:] = nums2[:n]
    elif n < 1:
        nums1[:] = nums1[:m]
    # then combine nums1 and nums2 
    # store each element into nums1
    nums1[:] = nums1[:m] + nums2[:n]
    # use the sort method to sort nums1
    nums1.sort()
    # returns nums1 for now
    return nums1

print(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
print(merge([1], 1, [], 0))
print(merge([0], 0, [1], 1))
