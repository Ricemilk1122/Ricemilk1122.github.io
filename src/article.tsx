import React from 'react';
import { createRoot } from 'react-dom/client';
import Article from './pages/article';

const render = () => {
  const app = document.getElementById('app') || document.body;
  const root = createRoot(app);
  root.render(<Article />);
};

render();
