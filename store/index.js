import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import activeViewReducer from './reducers/activeViewReducer';
import httpReqReducer from './reducers/httpReqReducer'

const reducer = combineReducers({ 'activeView': activeViewReducer, 'httpReq': httpReqReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;