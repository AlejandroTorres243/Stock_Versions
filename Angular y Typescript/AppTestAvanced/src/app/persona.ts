export class Persona {

    nombre:string;
    apellidos:string;
    edad:number;
    informatico: boolean;

    constructor(nombre:string, apellidos:string, edad:number, informatico?: boolean) {

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.informatico = true;
    
    }

    


}
