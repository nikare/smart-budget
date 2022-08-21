import { InvestmentType, Currency } from '../types';

export interface IInvestment {
  type: InvestmentType;
  title: string;
  value: number;
  currency: Currency;
}
