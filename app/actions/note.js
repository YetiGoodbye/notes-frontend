import {notes} from 'Api';
import responseStatus from 'Api/responseStatus';
import syncStatus from 'Config/dataSyncStatus';

import types from './types';

const receiveNote = (note) => ({
  type: types.RECEIVE_NOTE,
  note,
});

const updateNote = (id) => (dispatch) => {
  dispatch(
    receiveNote({
      id,
      // valid: false,
      // updating: true,
      status: syncStatus.UPDATING,
    })
  );

  notes.fetchNote(id).then (
    response => {
      #-console.log('updateNote action, response:', response);
      if (response.status === responseStatus.OK) {
        dispatch(receiveNote({
          ...response.data,
          status: syncStatus.OK,
        }));
      } else {
        dispatch(receiveNote({
          id,
          status: syncStatus.NOT_FOUND,
        }));
      }
    },
    error => { console.log("action navigator: ", error) }
  );
};

export {
  receiveNote,
  updateNote,
};
