var express = require('express');
var app = express();
var cors = require('cors')
app.use(express.static('public'));
app.use(cors());

let personas = {nombre:"Pedro", apellido:"Hernandez", edad:20}
let personas2 = {nombre:"Anan", apellido:"Gomez", edad:21}

let persona3 = {nombre:"Pedro2", apellido:"Hernandez2", edad:20}
let personas4 = {nombre:"Ana2", apellido:"Gomez2", edad:21}

let lista = [];
let lista2 = [];

lista.push(personas,personas2);
lista2.push(persona3,personas4);


app.get('/personas', function (req, res) {
    setTimeout(function(){
        res.send(lista);
    },3000);
    
});

app.get('/personas2', function (req, res) {
    setTimeout(function(){
        res.send(lista2);
    },1000);
    
});
/*
app.get('/personas3', function (req, res) {
    setTimeout(function(){
        res.send(lista2);
    },1000);
    
});
*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
