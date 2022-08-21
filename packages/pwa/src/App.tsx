import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Dashboard } from './pages';
import { ROUTES } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
