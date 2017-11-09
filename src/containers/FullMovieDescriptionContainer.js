import { connect } from 'react-redux';
import { FullMovieDescription } from '../components/FullMovieDescription';
import { fetchMovieInfo, fetchTVShowInfo } from '../thunks/index';


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    currentMovie: state.currentMovie,
    relatedMovies: state.relatedMovies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovieInfo: (id, type) => {
      return dispatch(fetchInfo(id, type))
    }
  }
};

export function fetchInfo(id, type) {
  if (type == "movie") {
    return fetchMovieInfo(id, type);
  } else {
    return fetchTVShowInfo(id, type);
  }
};

const FullMovieDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullMovieDescription);

export default FullMovieDescriptionContainer;