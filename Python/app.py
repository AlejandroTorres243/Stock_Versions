from pymongo import MongoClient

MONGO_URI = 'mongodb://localhost'

"Conexion a la base de datos = asignandole la var del dominio"
client = MongoClient(MONGO_URI)

"Creando la var para la base de datos"
db = client['Mercado']
collection = db['Negocio']

#collection.insert_one({"_id":1, "Producto":"Huevos", "Price": 1.25})
#collection.insert_one({"_id":2, "Producto":"Carne", "Price": 4.10})
#collection.insert_one({"_id":3, "Producto":"Chorizo", "Price": 1.50})
#collection.insert_one({"_id":4, "Producto":"Patatas", "Price": 0.44})
#collection.insert_one({"_id":5, "Producto":"Pollo Completo", "Price": 1.50})



"Ejemplo de varios datos insertados aparte"
#producto_one = {"_id":6, "Producto":"Queso", "Price":2.67}
#producto_two = {"_id":7, "Producto":"Pan", "Price":1.15}
#producto_three = {"_id":8, "Producto":"Cafe", "Price":0.79}

#collection.insert_many([producto_one,producto_two,producto_three])

result = collection.find()

for lista in result:
    print(lista)
