import { useSelector } from 'react-redux';
import { IState } from '@smart-budget/validation';

export function useStore() {
  return useSelector((state: IState) => state);
}
