import {combineReducers} from 'redux';
import notes, * as notesSelectors from './notes';

const root = combineReducers({notes});
export default root;

const getNavigatorTreeNode = (state, id) => notesSelectors.getNavigatorTreeNode(state.notes, id);
const getAllNavigatorTree = (state) => notesSelectors.getAllNavigatorTree(state.notes);

export {
  getNavigatorTreeNode,
  getAllNavigatorTree,
};
