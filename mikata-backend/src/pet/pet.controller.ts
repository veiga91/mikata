import { Controller, Get, Post, Body, Query, Patch, BadRequestException } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet, Vaccine } from '@prisma/client';

export type PetWithVaccines = Pet & { vaccines: Vaccine[] }

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async pet(@Query('id') id: string): Promise<Pet> {
    return await this.petService.pet({ id });
  }

  @Get('all')
  async pets(): Promise<Pet[]> {
    return await this.petService.pets({});
  }

  @Post()
  async addPet(@Body() body: { name: string }) {
    if (!body.name) {
      throw new BadRequestException()
    }

    await this.petService.createPet({ name: body.name  });
  }

  @Patch('vaccines')
  async addVaccine(@Body() completeBody: { vaccineId: string, petId: string }): Promise<PetWithVaccines> {
    return await this.petService.addVaccine(completeBody)
  }

  @Patch()
  async updatePet(@Body() completeBody: { id: string, name: string }): Promise<Pet> {
    const { name, id } = completeBody
    return await this.petService.updatePet({ where: { id }, data: { name }});
  }
}
