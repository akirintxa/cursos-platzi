items = [
  {
    'product': 'camisa',
    'price': 100,
  },
  {
    'product': 'pantalones',
    'price': 300
  },
  {
    'product': 'pantalones 2',
    'price': 200
  }
]

#creo una lista solo son el precio de los items
prices = list(map(lambda item: item['price'], items))
print('items:', items) #no modifica la lista original
print('solo precios:', prices)

#agrego un nuevo elemento (taxes) a items
def add_taxes(item):
  item['taxes'] = item['price'] * .19
  return item

new_items = list(map(add_taxes, items))
print('items con tax:', new_items) # modifica la lista original
print('items:', items)