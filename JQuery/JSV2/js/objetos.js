// CLASE MOTO BASICA (CONSTRUCTOR)
var moto = function (nombre, cilindro) {
    this.cilindro= cilindro;
    this.nombre = nombre;
};

var ducati = new moto("ducati", "190c");

//CLASE MOTO VACIA (CONSTRUCTOR)
var Moto2 = function (){
    this.marca="";
    this.modelo="";
    this.matricula="";
};

var miburra = new Moto2();

console.log(miburra.matricula = "SA1234H");

//CLASE MOTO CON GET Y SET
var Moto3 = function (km){
    this.marca="";
    this.modelo="";
    this.matricula="";
    this.km = km;
    this.setKm=function(km){
        this.km=km;
    };
    this.getKm=function(){
        return this.km;
    };
    this.setMatricula=function(matricula){
        this.matricula=matricula;
    };
    this.getMatricula=function(){
        return this.matricula;
    };
};

var miburra3 = new Moto3(0);

console.log(miburra3.km);

//CLASE CONSTRUCTOR
var Mototrolo = function (km, matricula) {
    this.marca="";
    this.modelo="";
    this.matricula=matricula;
    this.km = km;
};

var gitano = new Mototrolo(890, "bab_bunny");

var Animal = function(){
    this.tipo = "";
    this.edad = 0;
    this.nombre = "";
};

var tigre = new Animal();
tigre.edad = 0;
tigre.tipo = "carnivoro";
tigre.nombre = "paco"

var animalico = new Animal();
animalico.edad = 0;
animalico.tipo = "desconocido";
animalico.nombre = "marco";