import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()

    id:number;

    @Column({length:50})

    titulo : string;

    @Column({length:50})
    
    autor: string;

    @Column({nullable:true})

    fechaLanzamiento : Date;
}
