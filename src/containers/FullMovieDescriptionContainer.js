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
      if (type == "movie") {
        dispatch(fetchMovieInfo(id, type));
      } else {
        dispatch(fetchTVShowInfo(id, type));
      }
    }
  }
};

const FullMovieDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullMovieDescription);

export default FullMovieDescriptionContainer;