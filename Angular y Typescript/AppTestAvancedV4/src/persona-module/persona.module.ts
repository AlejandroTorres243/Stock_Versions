import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaService } from './persona/persona.service';
import { PersonaController } from './persona/persona.controller';
import { PersonaSchema } from './database.providers';
import {Persona} from './persona.entity'

@Module({
//    imports:[MongooseModule.forFeature([Persona])],
    providers:[PersonaService],
    controllers:[PersonaController]
})
export class PersonaModule {}
