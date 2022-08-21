import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import * as Pages from './pages';
import { ROUTES } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.CALENDAR} element={<Pages.Calendar />} />
        <Route path={ROUTES.DASHBOARD} element={<Pages.Dashboard />} />
        <Route path={ROUTES.SETTINGS} element={<Pages.Settings />} />
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
