import { PetController, PetWithVaccines } from './pet.controller';
import { PetService } from './pet.service';
import { DaoService } from '../dao/dao.service';
import { Pet, Vaccine } from '@prisma/client';

describe('PetController', () => {
  let petController: PetController;
  let petService: PetService;
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
    petService = new PetService(daoService);
    petController = new PetController(petService);
  });

  describe('get pet', () => {
    it('should return the requested pet', async () => {
      const getPetDto = {
        id: '2'
      };

      jest.spyOn(petService, 'pet').mockImplementation(({ id }) => new Promise<Pet>((resolve) => {
        resolve({...petDto, id })
      }))

      const pet = await petController.pet(getPetDto.id)

      expect(pet.id).toBe(getPetDto.id);
    });
  });

  describe('addPet', () => {
    it('should return the created pet', async () => {
      const createPetDto = {
        ...petDto,
        name: 'Bruno',
      }

      jest.spyOn(petService, 'createPet').mockImplementation(({ name }) => new Promise<Pet>(
        (resolve) => {
          const createdPet: Pet = { ...petDto, name }
          resolve(createdPet)
        }
      ));

      const newPet = await petController.addPet(createPetDto.name)

      expect(newPet.name).toBe(createPetDto.name);
      expect(newPet.id).toBe(createPetDto.id);
    });
  });

  describe('addVaccine', () => {
    it('should return a pet with the added vaccine', async () => {
      const addVaccineDto = {
        vaccineId: '7',
        petId: '4'
      };

      jest.spyOn(petService, 'addVaccine').mockImplementation(({ vaccineId, petId }) => new Promise<PetWithVaccines>(
        (resolve) => {
          resolve({
            ...petDto,
            id: petId,
            vaccines:[{ ...vaccineDto, id: vaccineId }]
          })
        }
      ));

      const petWithVaccine = await petController.addVaccine(addVaccineDto)

      expect(petWithVaccine.id).toBe(addVaccineDto.petId);
      expect(petWithVaccine.vaccines[0].id).toBe(addVaccineDto.vaccineId);
    });
  });
});