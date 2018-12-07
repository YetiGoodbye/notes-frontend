import actions from 'Actions/types';

const node = (state = {}, action) => {
  const {type, id, title, noteId, childrenIds} = action;
  switch(type) {
    case actions.CREATE_NAVIGATOR_NODE:
    case actions.UPDATE_NAVIGATOR_NODE:
      return {id, title, noteId, childrenIds};

    default:
      return state;
  }
};

export default node;
