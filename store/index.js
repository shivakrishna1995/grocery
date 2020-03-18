import { createStore, combineReducers } from 'redux';
import activeViewReducer from './reducers/activeViewReducer';

const reducer = combineReducers({ 'activeView': activeViewReducer });

const store = createStore(reducer);

export default store;