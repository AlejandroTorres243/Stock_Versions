//npm install cors --save paquete nuevo 1
//npm install body-parser --save paquete 2

var express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.json());

let lista = [];

lista.push({"id":"1","concepto":"pendriver","importe":"300"});
lista.push({"id":"2","concepto":"pantalon","importe":"40"});

app.get('/productos', function (req, res) {
  res.send(lista);
});

app.delete('/productos/:id', function(req, res){
  
  //Seleccionar el elemento
  let selecciono = lista.filter(function(dato){
    return dato.id == req.params.id;
  })[0];

  //Busco el indice del elemento
  let indice = lista.indexOf(selecciono);

  //Elimino el indice del elemento
  lista.splice(indice,1);

  //Pinto por pantalla el resultado
  res.status(204).send();

});

app.put('/productos/:id', function(req, res){
  
  //Selecciona el elemento especifico
  let selecciono = lista.filter(function(dato){
    return dato.id == req.params.id;
  })[0];

  let indice = lista.indexOf(selecciono);
  lista[indice] = req.body;

  //Esto permite asignarle el resultado a la pantalla
  this.selecciono = req.body;

  //Pinto por pantalla el resultado
  res.status(200).send();

});


app.post("/productos",function(req,res){
  
  //el parametro me permite acceder a los datos que estan en json luego de instalar el paq
  lista.push(req.body);
  res.status(201).send();

});

//FILTROS CON NODE Y EXPRESS
app.get("/productos/filtro/:concepto",function(req,res){
  if(req.params.concepto == undefined)
    return lista;
  let listaFiltrada = lista.filter(function(elemento){
    return elemento.concepto.startsWith(req.params.concepto)
  });
  res.send(listaFiltrada);
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
