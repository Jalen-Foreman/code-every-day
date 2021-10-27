




# Sum of Minimums
# Given a 2D list of size m * n, your task is to find the sum of the minimum value in each row.

def sum_of_minimums(list):
    sum = 0
    for i in range(len(list)):
        # go through each index and find the minimum of that array
        # accumulate the sum of all the minimum values throught the sum variable
        sum += min(list[i])
    # return result
    return sum


my_list = [
    [1, 2, 3, 4, 5],  # minimum value of row is 1
    [5, 6, 7, 8, 9],  # minimum value of row is 5
    [20, 21, 34, 56, 100]  # minimum value of row is 20
]

print(sum_of_minimums(my_list))
#     # should return 26
