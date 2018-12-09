import {actionTypes} from 'Actions';

import note from './note';

const notes = (state = {}, action) => {
  
  switch(action.type) {

    case actionTypes.RECEIVE_NOTE:
      return {
        ...state,
        [action.note.id]: note({}, action)
      };

    default:
      return state;
  }
};

export default notes;
