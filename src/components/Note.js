import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Note({ note, deleteNote }) {
  return (
    <>
      <Link to={`notes/${note._id}`}>{note.title}</Link>
      <button onClick={deleteNote.bind(null, note._id)}>Delete Note</button>
    </>
  );
}

Note.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Note;
