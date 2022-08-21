import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './vendor';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { store } from './store';
import { App } from './App';

const Root = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

ReactDOM.createRoot(rootEl).render(Root);
serviceWorkerRegistration.unregister();
