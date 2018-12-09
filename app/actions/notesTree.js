import {notesTree} from 'Api';
import types from './types';

const receiveNotesTreeNode = (node) => ({
  type: types.RECEIVE_NOTES_TREE_NODE,
  node
});

const receiveNotesTreeNodes = (nodes) => ({
  type: types.RECEIVE_NOTES_TREE_NODES,
  nodes
});

const fetchNotesTreeNode = (id) => (dispatch) => {
  notesTree.fetchNode(id).then (
    node => { dispatch( receiveNotesTreeNode(node) )},
    error => { console.log("action navigator: ", error) }
  );
};

const fetchNotesTreeAllNodes = () => (dispatch) => {
  notesTree.fetchAllNodes().then (
    nodes => { dispatch( receiveNotesTreeNodes(nodes) )},
    error => { console.log("action navigator: ", error) }
  );
};

export {
  fetchNotesTreeNode,
  fetchNotesTreeAllNodes,
  receiveNotesTreeNode,
  receiveNotesTreeNodes,
};
