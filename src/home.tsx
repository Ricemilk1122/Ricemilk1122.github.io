import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/home';

const render = () => {
  const app = document.getElementById('app') || document.body;
  const root = createRoot(app);
  root.render(<Home />);
};

render();
