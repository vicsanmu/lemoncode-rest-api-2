import * as React from 'react';
import { getCharacter, patchBestSentences } from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';

export const useCharacter = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );

  const loadCharacter = (id: string) => {
    getCharacter(id).then((result) =>
      setCharacter(mapCharacterFromApiToVm(result))
    );
  };

  const changeBestSentences = (id: string, bestSentences: string[]) => {
    patchBestSentences(id, bestSentences).then((result) =>
      setCharacter(mapCharacterFromApiToVm(result))
    );
  };

  return { character, loadCharacter, changeBestSentences };
};
