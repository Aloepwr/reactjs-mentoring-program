import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

import { setSearchBy, SearchBy } from '../actions/index';
import { fetchMovies } from '../thunks/index';
import { Header } from '../components/Header';


const mapStateToProps = (state) => {
  return {
    isMoviesActive: state.searchBy === SearchBy.SEARCH_BY_MOVIES,
    isTVShowActive: state.searchBy === SearchBy.SEARCH_BY_TVSHOW
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoviesClick: () => {
      dispatch(setSearchBy(SearchBy.SEARCH_BY_MOVIES));
    },
    onTVShowsClick: () => {
      dispatch(setSearchBy(SearchBy.SEARCH_BY_TVSHOW));
    },
    onSubmitSearch: (value) => {
      dispatch(fetchMovies(value.searchText));
    }
  }
};

let HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

HeaderContainer = reduxForm({
  form: 'search',
  destroyOnUnmount: false
})(HeaderContainer);

export default HeaderContainer;