import {notes} from 'Api';
import types from './types';

const receiveNote = (note) => ({
  type: types.RECEIVE_NOTE,
  note,
});

const updateNote = (id) => (dispatch) => {
  dispatch(
    receiveNote({
      id,
      valid: false,
      updating: true
    })
  );

  notes.fetchNote(id).then (
    note => { dispatch(
      receiveNote({
        ...note,
        valid:true,
        updating: false
      })
    )},
    error => { console.log("action navigator: ", error) }
  );
};

export {
  receiveNote,
  updateNote,
};
