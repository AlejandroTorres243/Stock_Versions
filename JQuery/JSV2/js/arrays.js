var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Noviembre", "Diciembre"];

for(pos in array){
    console.log(array[pos]);
}

var valores = [true, 5, false, "hola", "adios", 2];

if(valores[1] > valores[5])
    console.log(valores[0]);

if(valores[3] != valores[4])    
    console.log(valores[2]);

console.log(valores[1] + valores[5]);
console.log(valores[1] - valores[5]);
console.log(valores[1] * valores[5]);
console.log(valores[1] / valores[5]);

var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
else if(numero2 > numero1) {
  console.log("numero2 es positivo");
}
if(numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1 == numero1++) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

var arreglos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for(var cont=0; cont < arreglos.length; cont++){
    console.log(arreglos[cont]);
}

console.log("SALTO DE LINEA SIG BUCLE");

for(lista in arreglos){
    console.log(arreglos[lista]);
}

console.log("SALTO DE LINEA SIG BUCLE jajaja");

var conta = 0;
while(conta < arreglos.length){
    console.log(arreglos[conta]);
    conta = conta + 1;
}

console.log("SALTO DE LINEA SIG BUCLE jaja x2s");

var trolo = 0;
do{
    console.log(arreglos[trolo]);
    trolo++;
}while(arreglos.length > trolo)

var edad1 = 12;
var edad2 = 21;

if(edad1 < 18)
    console.log("No puedes entrar a la disco menor y no puedes conducir");
if(edad2 > 18)
    console.log("Bienvenido SR puede pasar a la disco, puede tomar y votar a la vez");

var evalua = 0;

switch(evalua){
    case 1: console.log("no lo ha hecho mal");
    case 2: console.log("puede pasar");
    case "Black": console.log(evalua);
    default: console.log("SUPENDANLO");
}

var lock=0;

while(lock < 10){
    console.log(lock);
    lock = lock * 3;
}

var cuenta = 0; 
while(cuenta < 10){
    console.log(cuenta);
    cuenta = cuenta + 5;
}