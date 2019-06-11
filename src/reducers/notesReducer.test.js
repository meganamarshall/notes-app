import reducer from './notesReducer';
import { NEW_NOTE_PENDING, NEW_NOTE, FETCH_NOTES_PENDING, FETCH_NOTES } from '../actions/notesActions';

describe('notes reducer', () => {
  it('handles the new note pending action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });
    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
  it('handles the NEW_NOTE action', () => {
    const initialState = {
      loading: true,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: { title: 'hello', body: 'you are fun' }
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'hello', body: 'you are fun' }]
    });
  });
  it('handles the fetch notes pending action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: FETCH_NOTES_PENDING,
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
  it('handles the fetch notes action', () => {
    const initialState = {
      loading: true,
      list: []
    };

    const newState = reducer(initialState, {
      type: FETCH_NOTES,
      payload: [{ title: 'hello', body: 'there' }]
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'hello', body: 'there' }]
    });
  });
});
