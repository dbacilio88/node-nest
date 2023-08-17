import { DataSource, Repository } from 'typeorm';
import { PersonEntity } from '../entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonRepository extends Repository<PersonEntity> {

    constructor(private dataSource: DataSource) {

        super(PersonEntity, dataSource.createEntityManager());
    }
} 
