import {IsInt, IsString } from 'class-validator';
import { Document } from 'mongoose';


export class Persona extends Document{
    @IsString()
    nombre:string;
    @IsInt()
    edad:number;
}

