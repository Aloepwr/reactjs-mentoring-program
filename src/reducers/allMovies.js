import { RECEIVE_MOVIES } from '../actions/index';

export default function allMovies(state = [], action) {
  switch(action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    default:
      return state;
  }
};