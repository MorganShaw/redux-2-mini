import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import hackerNewsReducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer';

//need to create root reducer when bundling reducers
const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer
})

//in createStore the first thing we pass is the reducer state we want to make public.
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

