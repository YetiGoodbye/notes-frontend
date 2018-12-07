import {combineReducers} from 'redux';

import navigator, * as navigatorSelectors from './navigator';

const notes = combineReducers({navigator});

export default notes;

const getNavigatorTreeNode = (state, id) => navigatorSelectors.getTreeNode(state.navigator, id);
const getAllNavigatorTree = state => state.navigator;

export {
  getNavigatorTreeNode,
  getAllNavigatorTree
};
