import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';
import SortingContainer from '../containers/SortingContainer';
import MoviesList from './MoviesList';
import HeaderFilter from './HeaderFilter';
import Footer from './Footer';
import { fetchMovies } from '../thunks/index';

import '../stylesheets/Header.less';
import '../stylesheets/Footer.less';
import '../stylesheets/styles.less';


export class MoviesListResult extends React.Component {
  static fetchData(store, match) {
    return store.dispatch(fetchMovies(match.params.searchQuery));
  }

  componentDidMount() {
    if (this.props.match.params.searchQuery === undefined) return;    
    this.props.onSubmitSearch(this.props.match.params.searchQuery);
  }
  
  render () {
    const resultQuentity = this.props.movies.length;
    const results = resultQuentity == 1 ? "result" : "results";
    
    const movieListBar = <div className="search-filter__movies-amount">
                           <div>{resultQuentity} {results} was found</div>
                         </div>
  
    return (
      <div>
        <HeaderContainer searchQuery={ this.props.match.params.searchQuery } />
        <HeaderFilter>
          { movieListBar }
          <SortingContainer />
        </HeaderFilter>
        <main>
          <MoviesList movies={ this.props.movies } />
        </main>
        <Footer />
      </div>
    )
  }
};
