import { GenderType, StatusType } from './api';

export interface Character {
  id: number;
  name: string;
  status: StatusType;
  species: string;
  type: string;
  gender: GenderType;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  bestSentences: string[];
}

export const createEmptyCharacter = (): Character => {
  return {
    id: 1,
    name: '',
    status: 'unknown',
    species: '',
    type: '',
    gender: 'unknown',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    bestSentences: [],
  };
};
