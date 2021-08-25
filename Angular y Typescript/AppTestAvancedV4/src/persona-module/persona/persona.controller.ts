import { Controller, Post, Body, Get } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from '../persona.entity';

@Controller('persona')
export class PersonaController {
    constructor(private readonly personaService: PersonaService){}

    /*@Post()
    async create(@Body() persona:Persona):Promise<Persona>{
        return await this.personaService.create(persona);
    }*/

    @Get()
    async findAll():Promise<Persona[]>{
        return this.personaService.findAll();
    }
}
