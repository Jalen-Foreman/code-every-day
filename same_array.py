# Write a function called same, which accepts two arrrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
# same_array([1,2,2,3], [1,9,4,4]) true
# same_array([3,4,2,2], [16,4,9,2]) false (second array contains the squared of all values in the second array but not the same frequency)
# not checking invalid inputs or empty inputs


# Solving simpler problems
# dic = {}
# list1 = [1,2,3,4]
# dic['jalen'] = 1
# name = 'jalen'
# if name in dic:
#     print(True)
# else:
#   print(False)
# print(dic)
     

def same_array(arr1, arr2):
    # frequency counter pattern
    # make two dictionaries
    frequency_counter1 = {}
    frequency_counter2 = {}
    # each dic. is going to log how many times each index in both list are present
    for index in arr1:
        frequency_counter1[index] = (frequency_counter1.get(index, 0)) + 1
    for index in arr2:
        frequency_counter2[index] = (frequency_counter2.get(index, 0)) + 1
    # going to loop through the first dic. to see if the key squared value is present in the second dic. as a key else return false
    for key in frequency_counter1:
        if not(key ** 2 in frequency_counter2):
            return False
    # if it is present as a key, check to see if the value of the key equals the same value as the first dic. value else return false
        if not(frequency_counter1[key] == frequency_counter2[key ** 2]):
            return False
    # return true when loop exits
    return True
# print(same_array([1, 2, 2, 3], [1, 9, 4, 4]))
# print(same_array([3, 4, 2, 2], [16, 4, 9, 2]))
