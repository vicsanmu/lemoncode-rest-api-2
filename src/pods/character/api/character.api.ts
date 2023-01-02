import { Character } from './character.api-model';

const API_URL = ' http://localhost:3000/';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${API_URL}character/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const dataResponse = (await response.json()) as Character;
  return dataResponse;
};

export const patchBestSentences = async (
  id: string,
  bestSentences: string[]
): Promise<Character> => {
  const response = await fetch(`${API_URL}character/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      bestSentences,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const dataResponse = (await response.json()) as Character;
  return dataResponse;
};
