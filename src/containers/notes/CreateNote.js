import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteForm from '../../components/NoteForm';
import { newNote } from '../../actions/notesActions';

class CreateNote extends PureComponent {
  static propTypes = {
    createNote: PropTypes.func.isRequired
  };

  state = {
    title: '',
    body: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.createNote({ title, body });
    this.setState({ title: '', body: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() {
    return (
    <NoteForm onChange={this.handleChange} onSubmit={this.handleSubmit} title={this.state.title} body={this.state.body} submitText="Create Note"/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNote(note) {
    dispatch(newNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
