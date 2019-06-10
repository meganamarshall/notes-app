import { createStore, applyMiddleware, compose } from 'react-redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers';


const store = createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
