import { Injectable } from '@nestjs/common';
import { DaoService } from '../dao/dao.service';
import { Pet, Prisma, Vaccine } from '@prisma/client';
import { PetWithVaccines } from './pet.controller';

@Injectable()
export class PetService {
  constructor(private prisma: DaoService) {}

  async pet(
    petWhereUniqueInput: Prisma.PetWhereUniqueInput,
  ): Promise<Pet | null> {
    return this.prisma.pet.findUnique({
      where: petWhereUniqueInput,
      include: {
        vaccines: true
      }
    });
  }

  async pets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PetWhereUniqueInput;
    where?: Prisma.PetWhereInput;
    orderBy?: Prisma.PetOrderByWithRelationInput;
  }): Promise<Pet[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pet.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        vaccines: true
      }
    });
  }

  async createPet({ name }: { name: string}): Promise<Pet> {
    this.prisma
    return this.prisma.pet.create({
      data: { name },
    });
  }

  async addVaccine({ vaccineId, petId }: { vaccineId: string, petId: string }) {
    return await this.updatePet({
      where: {
        id: petId
       },
       data: {
        vaccines: {
          connect: [{ id: vaccineId }]
        }
       }
    })
  }

  async updatePet(params: {
    where: Prisma.PetWhereUniqueInput;
    data: Prisma.PetUpdateInput;
  }): Promise<PetWithVaccines> {
    const { where, data } = params;
    return this.prisma.pet.update({
      data,
      where,
      include: {
        vaccines: true
      }
    });
  }

  async deletePet(where: Prisma.PetWhereUniqueInput): Promise<Pet> {
    return this.prisma.pet.delete({
      where,
    });
  }
}