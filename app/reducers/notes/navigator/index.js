import actions from 'Actions/types';
import deleteKey from 'Utils';
import node from './node';

const navigator = (state = {}, action) => {
  const {type, id} = action;
  switch(type) {
    
    case actions.CREATE_NAVIGATOR_NODE:
      return {
        ...state,
        [id]: node({}, action)
      };

    case actions.UPDATE_NAVIGATOR_NODE:
      return {
        ...state,
        [id]: node(state[id], action)
      };

    case actions.DELETE_NAVIGATOR_NODE:
      return deleteKey({...state}, id);

    default:
      return state;
  }
};

export default navigator;

const getTreeNode = (state, id) => state[id];
const getTreeAll = (state) => state[id];

export {
  getTreeNode,
};
