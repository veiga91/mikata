import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VaccineModule } from './vaccine/vaccine.module';
import { PetModule } from './pet/pet.module';
import { DaoModule } from './dao/dao.module';

@Module({
  imports: [PetModule, VaccineModule, DaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
