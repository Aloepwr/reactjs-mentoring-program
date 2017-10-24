import { Link } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';
import SortingContainer from '../containers/SortingContainer';
import { MoviesList } from './MoviesList';
import Footer from './Footer';

import '../stylesheets/Header';
import '../stylesheets/Footer';
import '../stylesheets/styles';


export function MoviesListResult(props) {
  const resultQuentity = props.movies.length;
  const results = resultQuentity == 1 ? "result" : "results";
  const movieListBar =  <span>{resultQuentity} {results} was found</span>;

  return (
    <div>
      <header>
        <div className="header">
          <span className="span-title">netflixroulette</span>
          <HeaderContainer />
        </div>
      </header>
      <main>
        <MoviesList movies={ props.movies }>
          { movieListBar }
          <SortingContainer />
        </MoviesList>
      </main>
      <Footer />
    </div>
  )
};