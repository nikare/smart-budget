import { Currency } from '../types';

export interface IBudget {
  title: string;
  value: number;
  amount: number;
  group: 'family' | 'fixed' | 'investment';
  currency: Currency;
}
