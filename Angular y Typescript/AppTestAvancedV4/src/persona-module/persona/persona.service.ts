import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Persona } from '../persona.entity';
import { Model } from 'mongoose';



@Injectable()
export class PersonaService {
    constructor(@InjectModel('Persona') private readonly modeloPersona : Model<Persona>){

    }

findAll():Promise<Persona[]>{
    return this.modeloPersona.find().exec();
}

save(persona : Persona):Promise<Persona>{
    const nuevaPersona= new this.modeloPersona(persona);
    return nuevaPersona.save();
}

async findById(id: number):Promise<Persona>{
    return this.modeloPersona.findById(id);
}

async delete(id:number):Promise<Persona>{
    const promesaObjeto=await this.modeloPersona.findById(id);
    return promesaObjeto.remove();
}
}
