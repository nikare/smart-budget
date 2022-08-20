import React from 'react';
import ReactDOM from 'react-dom/client';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { App } from './App';

const Root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

ReactDOM.createRoot(rootEl).render(Root);
serviceWorkerRegistration.unregister();
