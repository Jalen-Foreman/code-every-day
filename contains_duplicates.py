# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
# if a number is present more than once, return true, else return false
# contains_duplicates([1,3,4,3]) # true
# contains_duplicates([1,2,3,4]) # false
# contains_duplicates(d,d,s,s) # invalid input
# contains_duplicates() # invalid input

# Steps for code

# check if input contains a list of integers
# if it doesn't return 'invalid input'
# loop through each index of list
# place every index in a dictionary and set value to True
# if the dictionary contains an integer in the list, return true
# else return false

# Solving simpler problems
# num = [2,3,4,3]
# if type(num) == list:
#     print(True)

# dic = {}
# # dic['jalen'] = 1
# dic['jalen'] += 1

# print(dic)

# def contains_duplicate(data):
#     dic = {}
#     if type(data) == list:
#         for index in range(len(data)):
#             curr = data[index]
#             if curr in dic.keys():
#                 return True
#             else:
#                 dic[curr] = True
#         return False
#     else:
#         return 'invalid input'

# Modified solution
def contains_duplicate(data):
    # put list into a set
    # since sets don't allow duplicates, compare the lenght of list with the length of set
    # if they are the same length return false, else return true
    return not len(data) == len(set(data))

# print(contains_duplicate([1,2,3,4,5])) // False
# print(contains_duplicate([1,2,3,3,5])) // True

            

    
