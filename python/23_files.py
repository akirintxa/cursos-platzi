'''
file = open('./text.txt')
#print(file.read()) #todo el archivo

#print(file.readline()) #línea a línea
#print(file.readline())

#print(file.readlines()) #devuelve cada línea en una lista

for line in file:
    print(line)

file.close()
'''

#Con la funcion “WITH” podemos ejecutar el archivo y se cierra automaticamente despues de la ejecucion del el
with open('./text.txt') as file:
    for line in file:
        print(line)

