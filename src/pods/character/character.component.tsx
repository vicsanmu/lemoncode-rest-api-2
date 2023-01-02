import Avatar from '@material-ui/core/Avatar';
import React, { useState } from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import { Form, Formik } from 'formik';

interface Props {
  character: Character;
  changeBestSentences: (formValues: { bestSentences: string }) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const { character, changeBestSentences } = props;
  const {
    name,
    gender,
    location,
    origin,
    species,
    status,
    type,
    image,
    bestSentences,
  } = character;
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className="character-detail-title">
        <Avatar alt="Avatar" src={image} />
        <h1>{name}</h1>
      </div>
      <p>
        <b>Status: </b>
        <span>{status}</span>
      </p>
      <p>
        <b>Gender: </b>
        <span>{gender}</span>
      </p>
      <p>
        <b>Species: </b>
        <span>{species}</span>
      </p>
      <p>
        <b>Type: </b>
        <span>{type}</span>
      </p>
      <p>
        <b>Location: </b>
        <span>{location.name}</span>
      </p>
      <p>
        <b>Origin: </b>
        <span>{origin.name}</span>
      </p>
      <p>
        <b>Origin: </b>
        <span>{origin.name}</span>
      </p>
      <div className="bestSentences">
        <h4>Best Sentences</h4>
        {editMode ? (
          ''
        ) : (
          <div onClick={() => setEditMode(!editMode)}>
            <EditIcon fontSize="small" />
          </div>
        )}
      </div>
      {editMode ? (
        <Formik
          onSubmit={(formValues) => {
            changeBestSentences(formValues);
            setEditMode(!editMode);
          }}
          initialValues={{ bestSentences: bestSentences.join(';') }}
          enableReinitialize={true}
        >
          {(props) => (
            <Form className={classes.root}>
              <p>
                The sentences are separated by <b>;</b>
              </p>
              <TextField
                name="bestSentences"
                label="Sentences"
                variant="standard"
                value={props.values.bestSentences}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              <div className="formButtons">
                <Button
                  onClick={() => setEditMode(!editMode)}
                  variant="contained"
                  color="primary"
                  className="cancelButton"
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        bestSentences.map((bestSentence) => (
          <li id={bestSentence} key={bestSentence}>
            {bestSentence}
          </li>
        ))
      )}

      <Button
        onClick={() => history.goBack()}
        variant="contained"
        color="primary"
      >
        Back
      </Button>
    </div>
  );
};
