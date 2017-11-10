import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';


const configureStore = initialState => (
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, reduxPromiseMiddleware))
  )
);

export default configureStore;