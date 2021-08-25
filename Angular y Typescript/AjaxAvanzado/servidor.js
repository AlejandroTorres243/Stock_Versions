var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.static('publica'));
app.use(cors());

let persona={nombre: "pedro", apellido:"hernandez", edad:20};
let persona2={nombre: "Ana", apellido:"Gomez", edad:50};
let persona3={nombre: "Gema", apellido:"Blanco", edad:40};
let persona4={nombre: "Pavel", apellido:"Coca", edad:27};
let lista=[];
let lista2=[];
let lista3=[];
lista.push(persona, persona2);
lista2.push(persona3, persona4);
lista3.push(persona, persona2, persona3, persona4);

app.get('/personas', function (req, res) {
    setTimeout(function(){
        res.send(lista);
    }, 3000);

});
app.get('/personas2', function (req, res) {
    setTimeout(function(){
        res.send(lista2);
    }, 1000);

});
app.get('/personas3', function (req, res) {
    setTimeout(function(){
        res.send(lista3);
    }, 1000);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});