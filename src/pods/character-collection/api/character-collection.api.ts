import { CharacterEntityApi } from './character-collection.api-model';

const API_URL = ' http://localhost:3000/';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch(`${API_URL}character`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const dataResponse = (await response.json()) as CharacterEntityApi[];
  return dataResponse;
};
