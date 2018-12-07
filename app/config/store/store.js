import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import throttle from 'lodash/throttle';

import rootReducer from 'Reducers';
import {loadState, saveState} from './localStorage';

const configureStore = () => {
  const create = window.window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
  )(create);

  let persistedState = loadState();

  const store = createStoreWithMiddleware(rootReducer, persistedState);

  store.subscribe( throttle( () => {
    saveState(store.getState());
  }, 1000));

  return store;
}

export default configureStore;
