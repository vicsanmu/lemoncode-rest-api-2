export type StatusType = 'Alive' | 'Dead' | 'unknown';
export type GenderType = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface CharacterEntityApi {
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
  episode: string[];
  url: string;
  created: string;
  bestSentences: string[];
}
