import { GenderType, StatusType } from './api';

export interface CharacterEntityVm {
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
}
