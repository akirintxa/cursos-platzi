with open('./text.txt', 'r+') as file:
    for line in file:
        print(line)
    file.write('Dos líneas nuevas\n')
    file.write('La tercera\n')

#Reemplaza el contenido del archivo
with open('./text.txt', 'w+') as file:
    for line in file:
        print(line)
    file.write('Dos líneas nuevas\n')
    file.write('La tercera\n')