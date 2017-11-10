import React from 'react';
import { renderRoutes } from 'react-router-config';

import MoviesListResultContainer from './containers/MoviesListResultContainer';
import FullMovieDescriptionContainer from './containers/FullMovieDescriptionContainer';

const AppRoot = ({route}) => {
  return (
    <div className="app">
      { renderRoutes(route.routes) }
    </div>
  );
};

const routes = [
  {
    component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: MoviesListResultContainer
      },
      { path: '/search/:searchQuery',
        component: MoviesListResultContainer
      },
      { path: '/:type/:filmId',
        component: FullMovieDescriptionContainer
      }
    ]
  }
];

export default routes;