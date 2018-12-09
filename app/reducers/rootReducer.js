import {combineReducers} from 'redux';

import notesTree from './notesTree';
import notes from './notes';

export default combineReducers({notesTree, notes});
