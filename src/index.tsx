import React from 'react';
import { createRoot } from 'react-dom/client';
import RouteApp from './routes';

const render = () => {
  const app = document.getElementById('app') || document.body;
  const root = createRoot(app);
  root.render(<RouteApp />);
};

render();
