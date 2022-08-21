import { useStore } from 'hooks';
import './Balance.css';

export const Balance = () => {
  const { cash } = useStore();

  return (
    <div className="Balance">
      <h2>Баланс</h2>
      {cash.map(({ title, value }) => {
        return (
          <div className="Cash">
            <span>{title}</span>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );
};
