import { createStore, applyMiddleware, compose } from 'react-redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducers from './reducers';


export default createStore(reducers);
