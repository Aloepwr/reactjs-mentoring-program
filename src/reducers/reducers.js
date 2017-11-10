import { combineReducers } from 'redux';

import allMovies from './allMovies';
import currentMovie from './currentMovie';
import relatedMovies from './relatedMovies';
import searchBy from './searchBy';
import sortBy from './sortBy';

const reducers = combineReducers({
  allMovies,
  currentMovie,
  relatedMovies,
  searchBy,
  sortBy
});

export default reducers;