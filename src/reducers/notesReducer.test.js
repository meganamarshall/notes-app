import reducer from './notesReducer';
import { NEW_NOTE_PENDING, NEW_NOTE } from '../actions/notesActions';

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
});
