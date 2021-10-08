
# FUNCTIONS
# def hello_world():
#     print('Hello World')

# hello_world()

# def name(name):
#     print(f"My name is {name}")

# name("Jalen")

# def double(num):
#     return num*2

# print(double(4))

# IF STATEMENTS & BOOLEANS
# name = "Jalen"
# if name == "Jalen":
#     print("Your name is Jalen")
# else:
#     print("Your name is not Jalen")

# name = "Lotus"
# if name == "Jalen":
#     print("Your name is Jalen")
# else:
#     print("Your name is not Jalen")

# name_jalen = True
# name_quez = True

# if name_jalen or name_quez:
#     print('Your name is either Jalen or Quez')
# else:
#     print('Your name is neither Jalen or Quez')

# if name_jalen and name_quez:
#     print('Your full name is Jalen Quez')
# else:
#     print('Your name is not Jalen Quez')

# if not(name_jalen):
#     print('Your name is not Jalen')
# else:
#     print('Your name is Jalen')
# if not(name_quez):
#     print('Your name is not Quez')
# else:
#     print('Your name is Quez')

# if name_jalen and name_quez:
#     print('Your name is Jalen Quez')
# elif name_jalen or name_quez:
#     print('Your name is either Jalen or Quez')
# elif not(name_jalen) and not(name_quez):
#     print('Your name is not Jalen or Quez')

# STATEMENTS AND COMPARISONS
# def max_num(num_1, num_2, num_3):
#     if num_1 >= num_2 and num_1 >= num_3:
#         return num_1
#     elif num_2 >= num_1 and num_2 >= num_3:
#         return num_2
#     else: 
#         return num_3
    
# print(max_num(10, 80, 2))

# USER INPUT
# num1 = float(input('Enter first number: '))
# op = input('Enter operator: ')
# num2 = float(input('Enter second number: '))
# if num1 >= num2:
#     if op == '+':
#         print(num1 + num2)
#     elif op == '-':
#         print(num1 - num2)
#     elif op == '*':
#         print(num1 * num2)
#     elif op == '/':
#         print(num1 / num2)
#     else: 
#         print('Invalid Operator')
# else: 
#     if op == '+':
#         print(num1 + num2)
#     elif op == '-':
#         print(num2 - num1)
#     elif op == '*':
#         print(num1 * num2)
#     elif op == '/':
#         print(num2 / num1)

# LIST

# friends = ['Chase', 'Jalonie', 'Robert', 'Mom', 'Dad', 'Granny', 'Derek', 'Leonard', 'Anthony']

# DICTIONARIES

# numConversions = {
#     'one': 1,
#     'two': 2,
#     'three': 3,
#     'four': 4,
#     'five': 5,
#     'six': 6,
#     'seven': 7,
#     'eight': 8,
#     'nine': 9,
#     'ten': 10
# }

# WHILE LOOPS

# i = 1
# while i <= 10:
#     print(i)
#     i += 1

# print('The while loop is done.')

# secret_word = "clever"
# guess = ''
# counter = 1
# while guess != secret_word:
#     guess = input('Enter guess: ')
#     counter += 1
#     if counter > 3:
#         print('You lose')
#         break
#     elif guess == secret_word: 
#         print('You win!')

# FOR LOOPS
# for letter in "Jalen":
#     print(letter)

# for num in range(6):
#     print(num)

# friends = ['Chase', 'Jalonie', 'Robert', 'Leonard', 'Anthony', 'Barron', 'Vanessa', 'Granny']
# for index in range(len(friends)):
#     print(friends[index])

basketball_players = {
    'Goat': 'Lebron James',
    'Greek Freak': 'Giannis Antenekumpo',
    'Chef Curry': 'Stephen Curry',
    'Dame Time': 'Damien Leonard'
}
for players in basketball_players:
    print(basketball_players)