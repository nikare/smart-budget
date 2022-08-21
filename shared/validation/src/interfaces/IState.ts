import { IBudget } from './Ibudget';
import { ICash } from './ICash';
import { IFinancialCushion } from './IFinancialCushion';
import { IIncome } from './IIncome';
import { IInvestment } from './IInvestment';
import { ITarget } from './ITarget';

export interface IState {
  budget: IBudget[];
  cash: ICash[];
  financialCushion: IFinancialCushion[];
  income: IIncome;
  available: number;
  target: ITarget[];
  investment: IInvestment[];
  wealth: number;
}
