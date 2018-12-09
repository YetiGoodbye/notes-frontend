import {actionTypes} from 'Actions';

import node from './node';

const notesTree = (state = {}, action) => {
  switch(action.type) {

    case actionTypes.RECEIVE_NOTES_TREE_NODE:
      return {
        ...state,
        [action.node.id]: node(state[id], action)
      };

    case actionTypes.RECEIVE_NOTES_TREE_NODES:
      const nodes = action.nodes.reduce((acc, val) => {
        acc[val.id] = val;
        return acc;
      }, {});

      return { ...state, ...nodes };

    default:
      return state;
  }
};

export default notesTree;
