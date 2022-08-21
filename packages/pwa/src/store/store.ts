import { configureStore, createSlice } from '@reduxjs/toolkit';
import { IState } from '@smart-budget/validation';

export const initialState: IState = {
  budget: [],
  cash: [],
  financialCushion: [],
  income: {
    value: 0,
    currency: 'RUB',
  },
  available: 0,
  target: [],
  investment: [],
  wealth: 0,
};

const slice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
});

export const actions = slice.actions;
export const store = configureStore({ reducer: slice.reducer });
