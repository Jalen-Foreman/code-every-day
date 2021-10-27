
# Given a string, complete the function so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

# Inputs and Outputs
# split_strings('abc') // ['ab', 'c_']

def split_strings(s):
    split = []
# if the string has an odd length, add an underscore on the end of the string
    if len(s) % 2 != 0:
        s = s + '_'
# loop through string 
    for i in range(0, len(s), 2):
# push a pair of characters into an array by incrementing by 2 in loop
        split.append(f"{s[i]}{s[i+1]}")
# return result
    return split

print(split_strings('abc'))
# should return ['ab', 'c_']

print(split_strings('abcdef'))
# should return ['ab', 'cd', 'ef']
