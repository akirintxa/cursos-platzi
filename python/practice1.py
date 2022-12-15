# Write a function that returns the maximum of two numbers.

def biggest(num1, num2):
    if num1 > num2:
        return num1
    elif num2 > num1:
        return num2
    else:
        return ("ambos son iguales")


number1 = 34
number2 = 34
print(biggest(number1, number2))
