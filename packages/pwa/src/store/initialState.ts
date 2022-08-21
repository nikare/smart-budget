import { IState } from '@smart-budget/validation';

export const initialState: IState = {
  cash: [
    {
      title: 'SBI Bank',
      value: 0,
    },
    {
      title: 'Сбербанк',
      value: 0,
    },
    {
      title: 'Банк Санкт-Петербург',
      value: 0,
    },
    {
      title: 'Наличные рубли',
      value: 0,
    },
  ],
};
