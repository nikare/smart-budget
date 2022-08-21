import { configureStore, createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const slice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
});

export const actions = slice.actions;
export const store = configureStore({ reducer: slice.reducer });
export type RootState = ReturnType<typeof store.getState>;
