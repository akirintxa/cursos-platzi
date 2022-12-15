import matplotlib.pyplot as plt
'''
Instalar matplotlib en el entorno. 
No viene precargado.
En la consola correr:

> pip install matplotlib
'''


def generate_bar_chart(name, labels, values):
  fig, ax = plt.subplots()
  ax.bar(labels, values)
#  plt.show()
  plt.savefig(f'./img/{name}.png')
  plt.close

def generate_pie_chart(name, labels, values):
  fig, ax = plt.subplots()
  ax.pie(values, labels=labels)
  ax.axis('equal')
  #plt.show()
  plt.savefig(f'./img/{name}.png')
  plt.close

if __name__ == '__main__':
  labels = ['a', 'b', 'c']
  values = [10, 40, 800]
  #generate_bar_chart(labels, values)
  generate_pie_chart(labels, values)