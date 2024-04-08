import {createRequest} from "./createRequest";

const END_POINT = '/pet';
const request = createRequest(END_POINT);

export type PostPetBody = {
  name: string;
} & RequestInit['body'];

export type PatchPetBody = {
  id: string;
} & PostPetBody;

export function postPet(body: PostPetBody) {
  return request({ method: 'POST', body })
}

export async function patchPet(body: PatchPetBody) {
  const response = await request({ method: 'PATCH', body });
  return response.json();
}

export async function getPets() {
  const response = await request({ method: 'GET' }, '/all')
  return response.json();
}

export async function getPet({ id }: { id: string }) {
  const response = await fetch(`${END_POINT}?id=${id}`, { method: 'GET' });
  return response.json();
}