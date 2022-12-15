name = " "
if not name.strip():
    print("The name is empty")
print(name)

age = 1
if age >= 12 and age <= 18:
    print("Teenager")
elif age < 12:
    print("Too young")
else:
    print("Too old")


# Operador ternario
if age >= 18:
    message = "Vota"
else:
    message = "No vota"
print(message)

message2 = "Vota" if age >= 18 else "No vota"
print(message2)
