import random
options = ('piedra', 'papel', 'tijera')

round=1
userWin = 0
pcWin = 0

#El juego se detiene después de 5 rondas o quien gane 3 veces
while round <10 and userWin <3 and pcWin <3:
    print ('*' *10)
    print ('Ronda ', round)
    print ('*' *10)

    userOption = input('Escoge piedra, papel o tijera => ')
    userOption = userOption.lower()

    if not userOption in options:
        print('Opción no válida')

    pcOption = random.choice(options)

    print ('El usuario eligió =>', userOption)
    print ('La computadora eligió =>', pcOption)

    if userOption == pcOption:
        print ('**Empate')
    elif userOption == 'piedra':
        if pcOption == 'tijera':
            print('**Ganó el usuario =>', userOption, 'gana a', pcOption)
            userWin += 1
        else:
            print('**Ganó la computadora =>', pcOption, 'gana a', userOption)
            pcWin += 1
    elif userOption == 'papel':
        if pcOption == 'piedra':
            print('**Ganó el usuario =>', userOption, 'gana a', pcOption)
            userWin += 1
        else:
            print('**Ganó la computadora =>', pcOption, 'gana a', userOption)
            pcWin += 1
    elif userOption == 'tijera':
        if pcOption == 'papel':
            print('**Ganó el usuario =>', userOption, 'gana a', pcOption)
            userWin += 1
        else:
            print('**Ganó la computadora =>', pcOption, 'gana a', userOption)
            pcWin += 1

    print ('=' *20)
    print ('Ronda:',round,'->','Usuario ', userWin, 'vs.', pcWin, 'Computadora')
    print ('=' *20)
    round += 1
print ('=' *20)
print ('Resultado Final')
print ('Total de rondas', round-1)
print ('Usuario ', userWin, 'vs', pcWin, 'Computadora')
print ('=' *20)