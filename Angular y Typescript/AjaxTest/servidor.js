var express = require('express');
var app = express();
app.use(express.static('public'));
var cors = require('cors');
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());

let personas = {nombre:"Pavel", apellido:"Hearnandez", edad:29}
let personas2 = {nombre:"Anadn", apellido:"Gaomez", edad:25}
let persona3 = {nombre:"Pedro2", apellido:"Hernandez2", edad:20}
let personas4 = {nombre:"Ana2", apellido:"Gomez2", edad:21}

let lista = [];
let lista2 = [];


lista.push(personas,personas2,persona3);

lista2.push(persona3,personas4);

app.get('/personassencillas', function (req, res) { //MOSTRAR LISTA PRINCIPAL DEL SERVIDOR
    setTimeout(function(){
        res.send(lista.map(function(p){
            return {"nombre":p.nombre};
        }));
    },3000);
    
});

app.get("/personas/:nombre",function(req,res){ 
    let elemento = lista.filter(function(e){
        return e.nombre == req.params.nombre;
    })[0];
    res.send(elemento);
})

//ACCIONES DEL FORMULARIO 

app.get('/personas', function (req, res) { //MOSTRAR LISTA PRINCIPAL DEL SERVIDOR
    setTimeout(function(){
        res.send(lista);
    },3000);
    
});

app.post("/personas", function(req, res){ //AGREGA A LA LISTA PRINCIPAL UN DATO AL SERVIDOR
    let persona = req.body;
    lista.push(persona);
    res.send();
});

app.delete("/personas/:nombre",function(req,res){ //ELIMINA UN DATO DE LA LISTA PRINCIPAL DEL SERVIDOR 
    let elemento = lista.filter(function(e){
        return e.nombre == req.params.nombre;
    })[0];
    let indice = lista.indexOf(elemento);
    lista.splice(indice,1);
    res.send();
})

app.put("/personas/:nombre",function(req,res){ 
    let elemento = lista.filter(function(e){
        return e.nombre == req.params.nombre;
    })[0];
    let posicion = lista.indexOf(elemento);
    lista[posicion] = req.body;
    res.send();
})

/*
app.get('/personas2', function (req, res) {
    setTimeout(function(){
        res.send(lista2);
    },1000);
    
});

app.get('/personas3', function (req, res) {
    setTimeout(function(){
        res.send(lista2);
    },1000);
    
});
*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
