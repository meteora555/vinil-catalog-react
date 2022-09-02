// import {createStore} from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from './reducers/filters';
import vinilReducer from './reducers/vinils';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
  filterReducer,
  vinilReducer,
  cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
