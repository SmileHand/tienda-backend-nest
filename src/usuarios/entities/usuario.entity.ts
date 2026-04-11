import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({length:40})
    nombreUsuario!: string;
    @Column({
        length:50,
        unique:true
    })
    email!: string;
    @Column('text')
    hash_pass!: string;
    @Column()
    esAdmin!:boolean;
}
