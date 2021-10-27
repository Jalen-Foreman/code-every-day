def fizzBuzz(n):
    # Write your code here
    # make a loop that prints up to n and stops
    for i in range(1, n + 1):
        # if the current number doesn't divide into 3 or 5 without remainders, print the number
        if i % 3 == 0 and i % 5 == 0:
            print('FizzBuzz')
        # elseif the current number divides only into 3 without remainders print Fizz
        elif i % 3 == 0:
            print('Fizz')
        # elseif the current number divides only into 5 without remainders print Buzz
        elif i % 5 == 0:
            print('Buzz')
        # elseif the current number divides into both 3 and 5 without remainders print FizzBuzz
        elif not(i % 3 == 0 and i % 5 == 0):
            print(i)

print(fizzBuzz(15))