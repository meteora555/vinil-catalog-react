// import {createStore} from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from './reducers/filters';
import vinilReducer from './reducers/vinils';

const rootReducer = combineReducers({
  filterReducer,
  vinilReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
