import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
});

export const store = configureStore({ reducer: storeSlice.reducer });
export const actions = storeSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
