
# Given a string, complete the function so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').


def split_strings(s):
    split = []
    if len(s) % 2 != 0:
        s = s + '_'
    for i in range(0, len(s), 2):
        split.append(f"{s[i]}{s[i+1]}")
    return split

print(split_strings('abc'))
# should return ['ab', 'c_']

print(split_strings('abcdef'))
# should return ['ab', 'cd', 'ef']
