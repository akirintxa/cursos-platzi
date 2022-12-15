import csv
import matplotlib.pyplot as plt

def lector_csv(paquete):
	with open(paquete, 'r') as archivo_csv:
		leyendo = csv.reader(archivo_csv, delimiter=',')
		#con el metodo next obtenemos solo el encabezado
		encabezado = next(leyendo)
		lista = []
		
		for filas in leyendo:
			#creamos tuplas del encabezado con las filas usando zip
			union_encabez_filas = zip(encabezado, filas)
			#print (list(union_encabez_filas))
			#crea una lista de tuplas (encabezado,items) con el print de arriba se puede verificar
			diccionario_comprehesions = {key:value for key, value in union_encabez_filas}
			#print(diccionario_comprehesions)
			#ok ahora cada fila es un diccionario con (clave:valor), necsitamos incluirlo en una lista
			
			lista.append(diccionario_comprehesions)
		return (lista)
		
		
	
def genera_pie_grafica(labels,values):

	fig, ax = plt.subplots()

	ax.pie(values, labels=labels)

	ax.axis('equal')

	plt.show()



	

if __name__ == '__main__':
	
	data = lector_csv('./data.csv')

	usuario = input('Indique el nombre del continente que desee graficar==> ')

	otro_filtro = list(filter(lambda item: item['Continent'] == usuario, data))
	'''aqui consigo lista de diccionarios pero solo el continente que desee'''
	#print (otro_filtro)
	#print (len(otro_filtro))

	paises = list(map(lambda x: x['Country/Territory'], otro_filtro))
	#logré obtener la lista de paises de un continente seria coordenadas "x"
	#print (paises)
	#print (len(paises))

	porcentajes = list(map(lambda y: float(y['World Population Percentage']), otro_filtro))
	#listo en este punto deberia graficar, se pudo convertir en float los porcentajes

	#print (porcentajes) 
	#print (len(porcentajes))

	genera_pie_grafica(paises,porcentajes)