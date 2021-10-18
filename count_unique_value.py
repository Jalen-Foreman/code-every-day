# Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

# count_unique_val([1,1,1,2]) // 2
# count_unique_val([1,2,3,4,4,4,5,6]) // 6
# count_unique_val([]) // 0

def count_unique_val(list):
    # make a left-l and right-r pointer
    l = 0
    r = 1
    # while r is less than arr.length
    while r < len(list):
    # if l is not equal to r then increment both pointers
        l_pointer = list[l]
        r_pointer = list[r]
        if l_pointer != r_pointer:
            l += 1
            l_pointer = r_pointer
            r += 1
    # when l is equal to r, increment r until it is not equal to l
        else: 
            r += 1
    # return the index of l + 1
    return l + 1


# print(count_unique_val([1, 1, 1, 2]))
print(count_unique_val([1, 2, 3, 4, 4, 4, 5, 6]))
