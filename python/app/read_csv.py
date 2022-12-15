import csv

def read_csv(path):
  with open(path, 'r') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    header = next(reader)
    data = []
    for row in reader:
      iterable = zip(header, row) #une cada item del header con el item de la fila que se lee. Devueve tuplas
      country_dict = {key: value for key, value in iterable}
      data.append(country_dict)
    return data

def read_csv2(path):
  with open(path, 'r') as csvfile:
    reader = csv.reader(csvfile, delimiter= ',')
    header = next(reader)
    data = []
    for row in reader:
      iterable = zip(header, row)
      prueba =dict((iterable))
      data.append(prueba)
    return data

if __name__ == '__main__':
  #data = read_csv('./data.csv')
  data = read_csv2('./data.csv')
  print(data[0])

'''
Método de iteración: ya lo hizo el profe en la clase
Método de loop: con ciclos for con vanilla python
Método de list comprehensions
Método de list y dict mapping
  
'''