# Si input is divisible by 3 --> Print Fizz
# Si input is divisible by 5 --> Print Buzz
# Si input is divisible by 3 an by 5 --> Print FizzBuzz
# Other input --> Print input
print('*' *10)
print ('Si es divisible por 3 = Fizz')
print ('Si es divisible por 5 = Buzz')
print ('Si es divisible por 3 = FizzBuzz')
print ('Para salir escribe Q')
print('*' *10)

def fizz_buzz(input):
    if input % (3*5) == 0:
        result = "FizzBuzz"
    elif input % 3 == 0:
        result = "Fizz"
    elif input % 5 == 0:
        result = "Buzz"
    else:
        result = input
    return result

while True:
    num = input("Escribe un número entero: ")
    try:
        print(fizz_buzz(int(num)))
    except ValueError:
        if num == 'Q' or num == 'q':
            break
        else:
            print("Debes escribir un número entero.")
            continue
