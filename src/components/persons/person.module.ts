import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from "./controllers/person.controller";
import { PersonService } from "./services/person.service";
import { PersonRepository } from "./repositories/person.repository";
import { PersonEntity } from "./entities";

@Module({
    controllers: [PersonController],
    providers: [PersonService, PersonRepository],
    imports: [
        TypeOrmModule.forFeature([PersonEntity]),

    ],
    exports: [
        TypeOrmModule
    ]
})
export class PersonModule { }