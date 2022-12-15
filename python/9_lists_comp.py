'''
#Ejemplo 1
#Tradicional
numbers = []
for element in range(1, 11):
  numbers.append(element * 2)

print(numbers)

#List Comprehension
numbers_v2 = [element * 2 for element in range(1, 11)]
print(numbers_v2)
'''
#Ejemplo 2
#Tradicional
numbers = []
for i in range(1, 11):
  if i % 2 == 0:
    numbers.append(i * 2)
print(numbers)

#List Comprehension
numbers_v2 = [i * 2 for i in range(1, 11) if i % 2 == 0]
print(numbers_v2)