import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class Review {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length:60 })
    title: string

    @Column()
    rating: number
}
