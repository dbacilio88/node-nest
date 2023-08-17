import { Module } from "@nestjs/common";
import { PersonModule } from "./persons/person.module";

@Module({
    imports: [
        PersonModule
    ],
    exports: [
        PersonModule
    ]
})
export class ComponentsModule { }