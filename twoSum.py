# Find two integers in the list that add up to the target number
# twoSum([2,7,11,15], 9) // [0,1]
# twoSum([3,2,4], 6) // [1,2]

def twoSum(list, target):
    # create a set
    hash = set()
    # loop through list
    for i in range(len(list)):
    # subtract target from every index in list
        difference = target - list[i]
    # if that difference is present in object, return the index of the current index and index of difference in list
        if difference in hash:
            return [i, list.index(difference)]
    # else place that current index in object
        else: 
            hash.add(list[i])
    return [0,0]


# print(twoSum([3, 4, 2], 6))
# print(twoSum([2, 7, 11, 15], 9))
print(twoSum([3,3], 6))
