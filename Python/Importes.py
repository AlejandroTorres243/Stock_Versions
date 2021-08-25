from pymongo import MongoClient

MONGO_URI = 'mongodb://localhost'

client = MongoClient(MONGO_URI)

"Creando la var para la base de datos"
db = client['DataBase']
collection = db['Usuario']

_Id_user = int
Username = str
Password = str
Email = str
Nombre = str
encmethod = str
Status = bool

collection.insert_one({_Id_user:80, Username:"Manuel", Password:"Alfa-tango-zulu", Email: "asdfsdfsd"})

#collection.insert_one({"_Id_user":1, "Username":"pepesan", "Password":"trololo","Email":"pepesan@cursodesarrollo.com",
 #                      "Nombre":"Pepe", "encmethod":"P", "Status":"True"})
