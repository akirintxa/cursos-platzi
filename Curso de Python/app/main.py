import utils
import read_csv
import charts

def run():
  #Graficar el porcentaje de población mundial
  data = read_csv.read_csv('./app/data.csv')

  # Filtra por un continente en específico
  data = list(filter(lambda item : item['Continent'] == 'South America',data))
 
  #Saco una lista de todos los países (solo columna Country)
  countries = list(map(lambda x: x['Country'], data))

  #Saco una lista de todos los % (solo columna WPP)
  percentages = list(map(lambda x: x['World Population Percentage'], data))

  # Grafico
  charts.generate_pie_chart(countries, percentages)
  
  '''
  #Buscar la población por año de un país específico
  country = input('Type Country => ')

  result = utils.population_by_country(data, country)

  if len(result) > 0:
    country = result[0]
    labels, values = utils.get_population(country)
    charts.generate_bar_chart(labels, values)
  '''

#Este if dice que si es ejecutado desde la terminal, entre al run y si es ejecutado desde otro archivo, no se ejecuta.
if __name__ == '__main__':
  run()