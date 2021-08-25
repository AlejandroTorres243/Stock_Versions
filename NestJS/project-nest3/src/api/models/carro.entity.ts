import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Carro {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 100 })
    marca: string;
    @Column('text')
    modelo: string;
    @Column({type: Date})
    fecha: Date;

}
