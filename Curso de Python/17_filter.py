numbers = [1,2,3,4,5]
new_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print('números originales:',numbers)
print('números filtrados:',new_numbers)


new_numbers_2 = list(map(lambda x: x %2==0, numbers))
print('números mapeados:',new_numbers_2)

print('*'*10)
#Ejemplo con diccionarios

matches = [
  {
    'home_team': 'Bolivia',
    'away_team': 'Uruguay',
    'home_team_score': 3,
    'away_team_score': 1,
    'home_team_result': 'Win'
  },
  {
    'home_team': 'Brazil',
    'away_team': 'Mexico',
    'home_team_score': 1,
    'away_team_score': 1,
    'home_team_result': 'Draw'
  },
  {
    'home_team': 'Ecuador',
    'away_team': 'Venezuela',
    'home_team_score': 5,
    'away_team_score': 0,
    'home_team_result': 'Win'
  },
]

print('lista original:',matches)
print(len(matches))

new_list = list(filter(lambda item: item['home_team_result'] == 'Win', matches))

print('lista filtrada:', new_list)
print(len(new_list))

print('lista original después del filtro:',matches)
print(len(matches))




