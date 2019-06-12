import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail({ note }) {
  return (
    <>
      <p>{note.title}</p>
      <p>{note.body}</p>
    </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default NoteDetail;
