import * as notesTree from './notesTree';
import * as notes from './notes';

const getNotesTreeNode = (state, id) =>
    notesTree.getNode(state.notesTree, id);

const getNotesTreeAllNodes = (state) =>
    notesTree.getAllNodes(state.notesTree);

const getNote = (state, id) => notes.getNote(state.notes, id)

export {
  getNotesTreeNode,
  getNotesTreeAllNodes,
  getNote,
};
