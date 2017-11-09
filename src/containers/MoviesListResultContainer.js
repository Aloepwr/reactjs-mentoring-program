import { connect } from 'react-redux';

import { MoviesListResult } from '../components/MoviesListResult';
import { SortBy } from '../actions/index';


const mapStateToProps = (state) => {
  const sortedMovies = state.allMovies.slice();

  sortedMovies.sort((a,b) => {
    if (state.sortBy === SortBy.SORT_BY_RELEASE_DATE) {
      return parseInt(a.release_date) - parseInt(b.release_date);
    }
    if (state.sortBy === SortBy.SORT_BY_RATING) {
      return parseInt(b.vote_average) - parseInt(a.vote_average);
    }
  });

  return {
    movies: sortedMovies
  };
};

const MoviesListResultContainer = connect(
  mapStateToProps
)(MoviesListResult);

export { mapStateToProps };
export default MoviesListResultContainer;