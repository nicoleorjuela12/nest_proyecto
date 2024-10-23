import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length:60 })
    title: string

    @Column ('text')
    description: string
    
    @Column('int')
    weeks: number

    @Column('int')
    tuition: number

    @Column('varchar' ,{length: 30})
    minimumSkill: minimumSkill

    @Column ('date')
    createAd: Date 
}
enum minimumSkill  {
    'Beginner',
    'Intermediate',
    'Advanced'
}