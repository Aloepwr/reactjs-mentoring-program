import MoviesListResultContainer from './containers/MoviesListResultContainer';
import FullMovieDescriptionContainer from './containers/FullMovieDescriptionContainer';


const routes = [
  { path: '/',
    exact: true,
    component: MoviesListResultContainer
  },
  { path: '/search',
    exact: true,
    component: MoviesListResultContainer
  },
  { path: '/search/:searchQuery',
    component: MoviesListResultContainer
  },
  { path: '/:type/:filmId',
    component: FullMovieDescriptionContainer
  }
];

export default routes;