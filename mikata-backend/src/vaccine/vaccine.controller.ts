import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { Vaccine } from '@prisma/client';

@Controller('vaccine')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Get()
  async vaccine(@Query('id') id: string ): Promise<Vaccine> {
    return await this.vaccineService.vaccine({ id });
  }

  @Post()
  async addVaccine(@Body() completeBody: { name: string, description: string, code: string }): Promise<Vaccine> {
    return await this.vaccineService.createVaccine(completeBody);
  }
}
