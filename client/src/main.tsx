import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './config.ts';
import store from './store/index.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
