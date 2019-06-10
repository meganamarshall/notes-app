import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, onChange, title, body, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" value={title} type="text" onChange={onChange} />
      <input name="body" value={body} type="text" onChange={onChange} />
      <button>{submitText}</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  submitText: PropTypes.string
};

NoteForm.defaultProps = {
  submitText: 'Submit'
};

export default NoteForm;
