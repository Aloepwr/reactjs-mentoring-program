import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { setSearchBy, SearchBy } from '../actions/index';
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
    }
  }
};

let HeaderContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));

export default HeaderContainer;