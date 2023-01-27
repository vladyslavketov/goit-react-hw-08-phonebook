import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

const rootReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});