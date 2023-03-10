import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContexProvider } from './context/authContext';
import './styles/main.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </StrictMode>
);
