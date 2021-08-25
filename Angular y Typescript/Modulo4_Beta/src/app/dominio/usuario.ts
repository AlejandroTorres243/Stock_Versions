export class Usuario {

    public id = 0;

    constructor(public nombre?:string,
        public clave?:string, public email?:string,
        public status?: boolean, public tipo_usuario?:string
        ){
            this.id++;
        }

}
