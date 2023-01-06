import utils
import read_csv
import charts
import pandas as pd

def run():
  '''
  #Graficar el porcentaje de población mundial
  data = read_csv.read_csv('./data.csv')

  # Filtra por un continente en específico
  data = list(filter(lambda item : item['Continent'] == 'South America',data))
 
  #Saco una lista de todos los países (solo columna Country)
  countries = list(map(lambda x: x['Country'], data))

  #Saco una lista de todos los % (solo columna WPP)
  percentages = list(map(lambda x: x['World Population Percentage'], data))

  #Se crea el Grafico
  charts.generate_pie_chart('South America',countries, percentages)
  
  '''

  #Código equivalente usando PANDAS
  
  # df(dataframe) 
  df = pd.read_csv("data.csv")  # Nos ahorramos el método creado read_csv.py
  # Filtra por un continente en específico
  continent = input('Type Continent => ')
  df = df[df['Continent'] == continent]  
  #Saco una lista de todos los países (solo columna Country)
  countries = df['Country'].values
  #Saco una lista de todos los % (solo columna WPP)
  percentages = df['World Population Percentage'].values
  #Se crea el Grafico
  charts.generate_pie_chart(continent, countries, percentages)

'''
  #Buscar la población por año de un país específico
  country = input('Type Country => ')
  #print(country)
  data = read_csv.read_csv('./data.csv')
  result = utils.population_by_country(data, country)

  if len(result) > 0:
    country = result[0]
    #print(country)
    labels, values = utils.get_population(country)
    charts.generate_bar_chart(country['Country'], labels, values)
'''

#Este if dice que si es ejecutado desde la terminal, entre al run y si es ejecutado desde otro archivo, no se ejecuta.
if __name__ == '__main__':
  run()