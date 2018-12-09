import {actionTypes} from 'Actions';

const note = (state = {}, action) => {
  switch(action.type) {

    case actionTypes.RECEIVE_NOTE:
      return action.note;

    default:
      return state;
  }
};

export default note;
