class Persona {

    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles(){
        console.log(this.nombre);
        console.log(this.edad);
        console.log(this.genero);
    }

};

class Estudiante extends Persona {

    constructor(nombre, edad, genero, curso, grupo){
        super(nombre,edad,genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar(){
        console.log("SOLICITUD PROCESADA");
        console.log(this.curso);
        console.log(this.grupo);
    }

}

class Profesor extends Persona {

    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre,edad,genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar(){

        console.log("Asignando curso y nivel");
        console.log(this.asignatura);
        console.log(this.nivel);

    }

}

var persona = new Persona("MANUEL",23,"MASCULINO");
var estudiante = new Estudiante("JON", 23, "MASCULINO", "JAVA", 007);
var profesor = new Profesor("David",40, "MASCULINO", "WEB", "YUCA");

persona.obtDetalles();
estudiante.obtDetalles();
profesor.obtDetalles();

estudiante.registrar();
profesor.asignar();