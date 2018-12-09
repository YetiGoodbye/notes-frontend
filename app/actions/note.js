import {notes} from 'Api';
import types from './types';

const receiveNote = (note) => ({
  type: types.RECEIVE_NOTE,
  note
});

const fetchNote = (id) => (dispatch) => {
  notes.fetchNote(id).then (
    note => { dispatch( receiveNote(note) )},
    error => { console.log("action navigator: ", error) }
  );
};

export {
  receiveNote,
  fetchNote,
};
