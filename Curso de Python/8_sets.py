set_countries = {'col', 'mex', 'bol'}
print(set_countries)
print(type(set_countries))

#Los conjuntos ignoran los elementos repetidos
set_numbers = {1, 2, 2, 443, 23}
print(set_numbers)

set_types = {1, 'hola', False, 12.12}
print(set_types)

#Forma un conjunto con los caracteres de un string e ignora los repetidos
set_from_string = set('hoola')
print("Desde string: ", set_from_string)

#Forma un conjunto con los elementos de una tupla e ignora los repetidos
set_from_tuples = set(('abc', 'cbv', 'as', 'abc'))
print("Desde tupla: ",set_from_tuples)

#Forma un conjunto con los elementos de una lista e ignora los repetidos
numbers = [1,2,3,1,2,3,4]
set_numbers = set(numbers)
print("Desde lista: ",set_numbers)

#Forma una lista con elementos único de un conjunto
unique_numbers = list(set_numbers)
print("Set original", set_numbers)
print("Lista única desde un set: ",unique_numbers)

#Cantidad de elementos de un conjunto
size = len(set_countries)
print ("Tamaño: ",size)

#Busca el primer string en el conjunto y devuelve Booleano
print('col'in set_countries)
print('pe'in set_countries)

# add
set_countries.add('pe')
print(set_countries)
set_countries.add('pe')
print(set_countries)

# update
set_countries.update({'ar', 'ecua', 'pe'})
print(set_countries)

# remove

set_countries.remove('col')
print(set_countries)

set_countries.remove('ar')
# borra un elemento pero si no existe, no falla python
set_countries.discard('arg')
print(set_countries)
set_countries.add('arg')
print(set_countries)

# limpiar todo el conjunto, lo deja en vacío
set_countries.clear()
print(set_countries)
print(len(set_countries))

print ('*'*10)
#Operaciones con conjuntos
set_a = {'col', 'mex', 'bol'}
set_b = {'pe', 'bol'}

print("Set A", set_a)
print("Set B", set_b)

set_c = set_a.union(set_b) #usa un método
print("Union ",set_c)
print("Union: ",set_a | set_b) #usa un operador

set_c = set_a.intersection(set_b)
print("Interseccion: ",set_c)
print("Interseccion: ",set_a & set_b)

set_c = set_a.difference(set_b)
print("Diferencia: ",set_c)
print("Diferencia: ",set_a - set_b)

set_c = set_a.symmetric_difference(set_b)
print("Diferencia simétrica: ",set_c)
print("Diferencia simétrica: ",set_a ^ set_b)