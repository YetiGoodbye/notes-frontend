import {actions} from 'Actions';

const node = (state = {}, action) => {
  switch(action.type) {

    case actions.RECEIVE_NOTES_TREE_NODE:
      return action.node;

    default:
      return state;
  }
};

export default node;
