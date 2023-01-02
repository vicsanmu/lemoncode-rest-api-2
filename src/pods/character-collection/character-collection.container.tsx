import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCharacterDetail = (id: number) => {
    history.push(linkRoutes.characterDetail(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCharacterDetail={handleCharacterDetail}
    />
  );
};
