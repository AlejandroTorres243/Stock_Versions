export function animalPlanet() {

    class Animal {

        raza: String;
        nombre: String;

        constructor2(){
            this.nombre = "Sin Asignar";
            this.nombre = "Sin Asignar";
        }

        constructor(raza: string, nombre: string) {
            this.nombre = nombre;
            this.raza = raza;
        }

        getRaza() : String{
            return this.raza;
        }

        getNombre() : String{
            return this.nombre;
        }

        setRaza(raza: string){
            this.raza = raza; 
        }

        setNombre(nombre: string){
            this.nombre = nombre;
        }

        ToString() : String {
            return "El animal es un " + this.nombre + " y es de raza " + this.raza + ".";
        }

    }

    class Perro extends Animal{

        constructor(nombre: string, raza: string){
            super(nombre, raza);
        }

    }

    //function main(){

        let desconocido = new Animal('d', 'd');

        let perro = new Animal('firulais', 'lobo');

        let canino = new Perro('wolfi', 'lobo');
        
        desconocido.constructor2();

        console.log(desconocido.ToString());

        console.log(perro.ToString());
        
        console.log(canino.ToString());

    //}

}