import * as api from 'Api';
import types from './types';

const updateNode = (id, title, noteId, childrenIds) => ({
  type: types.UPDATE_NAVIGATOR_NODE,
  id, title, noteId, childrenIds,
});

const fetchNavigatorNode = (id) => (dispatch) => {
  api.navigator.fetchNode(id).then (
    data => {
      
      data.forEach(node => {
        const {id, title, noteId, childrenIds} = node;
        dispatch(updateNode(id, title, noteId, childrenIds));
      });
    },
    error => { console.log("action navigator: ", error); }
  );
};

export {
  fetchNavigatorNode,
};
