import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const render = () => {
  const app = document.getElementById('app') || document.body;
  const root = createRoot(app);
  root.render(<App />);
};

render();
