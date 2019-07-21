import { createStore } from 'redux';
import RootReducer from './reducers/index';

export const store = createStore(RootReducer);
