import { Module } from '@nestjs/common';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './configurations/database.module';

@Module({
  imports: [
    DatabaseModule,
    ComponentsModule
  ]
})
export class AppModule { }
