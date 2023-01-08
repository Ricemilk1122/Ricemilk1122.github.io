import React from 'react';
import { RouteObject } from 'react-router-dom';
import Article from '../pages/article';
import Home from '../pages/home';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'article',
    element: <Article />,
  },
];

export default routesConfig;
