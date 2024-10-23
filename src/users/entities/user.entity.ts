import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()


export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length:25 })
    name: string

    @Column('varchar', {length:60})
    email: string

    @Column('varchar', {length:20 })
    role: string

    @Column('varchar', {length:20 })
    password: string
}
