import { Controller, Get, Post, Body, Query, Patch } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet, Vaccine } from '@prisma/client';

export type PetWithVaccines = Pet & { vaccines: Vaccine[] }

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async pet(@Query('id') id: string ): Promise<Pet> {
    return await this.petService.pet({ id });
  }

  @Post()
  async addPet(@Body('name') name: string): Promise<Pet> {
    return await this.petService.createPet({ name });
  }

  @Patch()
  async addVaccine(@Body() completeBody: { vaccineId: string, petId: string }): Promise<PetWithVaccines> {
    return await this.petService.addVaccine(completeBody)
  }
}
