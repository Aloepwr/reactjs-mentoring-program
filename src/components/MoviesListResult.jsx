import { Link } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';
import SortingContainer from '../containers/SortingContainer';
import MoviesList from './MoviesList';
import HeaderFilter from './HeaderFilter';
import Footer from './Footer';

import '../stylesheets/Header';
import '../stylesheets/Footer';
import '../stylesheets/styles';


export function MoviesListResult(props) {
  const resultQuentity = props.movies.length;
  const results = resultQuentity == 1 ? "result" : "results";
  const movieListBar = <div className="search-filter__movies-amount">
                         <div>{resultQuentity} {results} was found</div>
                       </div>

  return (
    <div>
      <HeaderContainer />
      <HeaderFilter>
        { movieListBar }
        <SortingContainer />
      </HeaderFilter>
      <main>
        <MoviesList movies={ props.movies } />
      </main>
      <Footer />
    </div>
  )
};