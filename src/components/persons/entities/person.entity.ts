import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    name: 'Persons'
})
export class PersonEntity {

    @ApiProperty({
        example: "1fc8c4c3-00c7-449b-8c90-30bee79332a1",
        description: "Person Id",
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        description: "Person Name",
        example: "John"
    })
    @Column('text', {
        nullable: false
    })
    name: string;

    @ApiProperty({
        description: "Person Lastname",
        example: "Doe"
    })
    @Column('text', {
        nullable: false
    })
    lastname: string;

    @ApiProperty({
        example: "Registration Date",
        description: ""
    })
    @Column('date', {
        nullable: false
    })
    created: Date;

    @ApiProperty({
        example: "Update Date",
        description: ""
    })
    @Column('date', {
        nullable: false
    })
    updated: Date;
}
