var express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
app.use(expressJwt({secret: 'superclave'}).unless({path: ['/login']}));
app.use(cors());
app.use(bodyParser.json());

let lista = [];

lista.push({"id":"0","nombre":"Jose Miguel","clave":"1234","email":"joss@hotmail.com","status":"false","tipo_usuario":"admin"})
lista.push({"id":"1","nombre":"Maria Jesus","clave":"1234","email":"mar@hotmail.com","status":"false","tipo_usuario":"redactor"})
lista.push({"id":"2","nombre":"Jennifer","clave":"1234","email":"jess@hotmail.com","status":"false","tipo_usuario":"editor"})
lista.push({"id":"3","nombre":"Miguel Torres","clave":"1234","email":"miguel@hotmail.com","status":"false","tipo_usuario":"suscriber"})
lista.push({"id":"4","nombre":"Antonio Lopez","clave":"1234","email":"joss@hotmail.com","status":"false","tipo_usuario":"visitor"})

app.get('/usuario', function (req, res) {
  res.send(lista);
});

app.post("/usuario",function(req,res){
  
  //el parametro me permite acceder a los datos que estan en json luego de instalar el paq
  lista.push(req.body);
  res.status(201).send();

});

//ELEMENTO A BORRAR
app.delete('/usuario/:id', function(req, res){
  
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


app.post("/login",function(req,res){
  const usuario = req.body;

  if(usuario.nombre == "manuel" && usuario.clave == "manuel"){
    //genero tokens
    var token = jwt.sign({id:usuario.nombre}, 'superclave', {expiresIn: '2h'});
    res.send({token});
  }
  else{
    //NO GENERA ACCESO
    res.sendStatus(401);
  }

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});  