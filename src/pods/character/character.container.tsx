import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { useCharacter } from './character.hook';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const { character, loadCharacter, changeBestSentences } = useCharacter();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      loadCharacter(id);
    }
  }, []);

  const onChangeBestSentences = (formValues: { bestSentences: string }) => {
    const { bestSentences } = formValues;
    let bestSentencesList = [];
    if (bestSentences) {
      bestSentencesList = bestSentences.includes(';')
        ? bestSentences.split(';')
        : [bestSentences];
    }

    changeBestSentences(character.id.toString(), bestSentencesList);
  };

  return (
    <CharacterComponent
      character={character}
      changeBestSentences={onChangeBestSentences}
    />
  );
};
