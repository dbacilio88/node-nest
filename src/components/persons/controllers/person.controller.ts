import { Controller, Get, Logger } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonEntity } from '../entities';
import { PersonService } from '../services/person.service';

@ApiTags('Person')
@Controller('person')
export class PersonController {

    private readonly logger = new Logger('PersonController');
    constructor(
        private readonly personService: PersonService
    ) { }

    @ApiResponse({ status: 200, description: 'Products records', type: PersonEntity })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })

    @Get('all')
    findAll() {
        this.logger.log('execute process all person records');
        return this.personService.findAll();
    }
}