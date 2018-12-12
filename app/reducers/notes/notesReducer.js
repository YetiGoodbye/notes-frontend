import {actionTypes} from 'Actions';

import note from './note';

const notes = (state = {}, action) => {
  
  switch(action.type) {

    case actionTypes.RECEIVE_NOTE: {
      const id = action.note.id;
      return {
        ...state,
        [id]: note(state[id], action)
      };
    }

    default:
      return state;
  }
};

export default notes;
