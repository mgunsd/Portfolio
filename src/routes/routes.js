import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Home,
  About,
  Contact,
  Work,
  NotFound404,
} from 'pages';

export const Routes = [
  {
    path: '/',
    key: 'root',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    key: 'home',
    exact: true,
    component: () => <Redirect to={'/'} />
  },
  {
    path: '/about',
    key: 'about',
    exact: true,
    component: About,
  },
  {
    path: '/work',
    key: 'work',
    exact: true,
    component: Work,
  },
  {
    path: '/contact',
    key: 'contact',
    exact: true,
    component: Contact
  },
  {
    path: '/not-found',
    key: 'not-found',
    exact: true,
    component: NotFound404,
  },
  /// nested Routes
  // {
  //   path: '/blog',
  //   key: 'blog-index',
  //   component: Blog,
  // },

  /// Protected 
];