import { VaccineController } from './vaccine.controller';
import { VaccineService } from './vaccine.service';
import { DaoService } from '../dao/dao.service';
import { Pet, Vaccine } from '@prisma/client';

describe('VaccineController', () => {
  let vaccineController: VaccineController;
  let vaccineService: VaccineService;
  let daoService: DaoService;
  const petDto: Pet = {
    id: '1',
    name: 'Popeye',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  const vaccineDto: Vaccine = {
    name: 'Vacc',
    id: 'b',
    description: 'desc',
    code: 'yu89'
  }
  
  beforeEach(() => {
    daoService = new DaoService();
    vaccineService = new VaccineService(daoService);
    vaccineController = new VaccineController(vaccineService);
  });

  describe('get vaccine', () => {
    it('should return the requested vaccine', async () => {
      const getVaccineDto = {
        id: '2'
      };

      jest.spyOn(vaccineService, 'vaccine').mockImplementation(({ id }) => new Promise<Vaccine>((resolve) => {
        resolve({...vaccineDto, id })
      }))

      const vaccine = await vaccineController.vaccine(getVaccineDto.id)

      expect(vaccine.id).toBe(getVaccineDto.id);
    });
  });

  describe('createVaccine', () => {
    it('should return the created vaccine', async () => {
      const createVaccineDto = {
        ...vaccineDto,
        name: 'Bruno',
      }

      jest.spyOn(vaccineService, 'createVaccine').mockImplementation(({ name }) => new Promise<Vaccine>(
        (resolve) => {
          const createdVaccine: Vaccine = { ...vaccineDto, name }
          resolve(createdVaccine)
        }
      ));

      const newPet = await vaccineController.addVaccine(createVaccineDto)

      expect(newPet.name).toBe(createVaccineDto.name);
      expect(newPet.id).toBe(createVaccineDto.id);
    });
  });
});