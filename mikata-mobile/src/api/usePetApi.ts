import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postPet, PostPetBody, PatchPetBody, getPets, getPet, patchPet } from './petEndpoints';

export function usePetApi() {
  const queryClient = useQueryClient();

  const createPet = useMutation({
    mutationFn: (name: string ) => postPet({ name } as PostPetBody),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'] })
    }
  });

  const allPets = () => useQuery({ queryKey: ['pets'], queryFn: getPets });

  const petById = (id: string) => useQuery({ queryKey: [id], queryFn: () => getPet({ id }) });

  const updatePet = useMutation({
    mutationFn: (body: { name: string, id: string }) => patchPet(body as PatchPetBody),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: [id] })
    }
  });

  return {
    createPet,
    updatePet,
    allPets,
    petById
  }
}