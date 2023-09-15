import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MetricsProvider from './Context/MetricsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetricsProvider>
      <App />
    </MetricsProvider>
  </React.StrictMode>
);