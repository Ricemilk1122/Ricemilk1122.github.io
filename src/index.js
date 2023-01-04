import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const render = () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
};
render();
