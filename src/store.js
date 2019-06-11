import { createStore, applyMiddleware, compose } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);

