import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './hotel-card.styles';

interface Props {
  character: CharacterEntityVm;
  onCharacterDetail: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onCharacterDetail } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{
              height: 0,
              paddingTop: '56.25%',
              backgroundSize: 'contain',
            }}
          />
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onCharacterDetail(character.id)}>
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
