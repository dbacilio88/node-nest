import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from "../repositories/person.repository";

@Injectable()
export class PersonService {

    private readonly logger = new Logger('PersonService');

    constructor(
        @InjectRepository(PersonRepository)
        private readonly personRepository: PersonRepository
    ) { }

    async findAll() {
        this.logger.log('execute query all person records');
        return await this.personRepository.find({
            take: 10,
            skip: 0
        })
    };
}