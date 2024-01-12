import { Injectable } from '@nestjs/common';
import { DaoService } from '../dao/dao.service';
import { Vaccine, Prisma } from '@prisma/client';

@Injectable()
export class VaccineService {
  constructor(private prisma: DaoService) {}

  async vaccine(
    vaccineWhereUniqueInput: Prisma.VaccineWhereUniqueInput,
  ): Promise<Vaccine | null> {
    return this.prisma.vaccine.findUnique({
      where: vaccineWhereUniqueInput,
    });
  }

  async vaccines(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VaccineWhereUniqueInput;
    where?: Prisma.VaccineWhereInput;
    orderBy?: Prisma.VaccineOrderByWithRelationInput;
  }): Promise<Vaccine[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.vaccine.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createVaccine(data: Prisma.VaccineCreateInput): Promise<Vaccine> {
    return this.prisma.vaccine.create({
      data,
    });
  }

  async updateVaccine(params: {
    where: Prisma.VaccineWhereUniqueInput;
    data: Prisma.VaccineUpdateInput;
  }): Promise<Vaccine> {
    const { where, data } = params;
    return this.prisma.vaccine.update({
      data,
      where,
    });
  }

  async deleteVaccine(where: Prisma.VaccineWhereUniqueInput): Promise<Vaccine> {
    return this.prisma.vaccine.delete({
      where,
    });
  }
}