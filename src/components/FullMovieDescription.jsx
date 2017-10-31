import React from 'react';
import { Link } from 'react-router-dom';

import HeaderFilter from './HeaderFilter';
import MoviesList from './MoviesList';
import MovieCardDescription from './MovieCardDescription';
import Footer from './Footer';

import '../stylesheets/MovieCardDescription.less';
import '../stylesheets/Footer.less';
import '../stylesheets/styles.less';


export class FullMovieDescription extends React.Component {
  componentWillMount() {
    this.props.loadMovieInfo(this.props.match.params.filmId, this.props.match.params.type);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.filmId != this.props.match.params.filmId) {
      this.props.loadMovieInfo(nextProps.match.params.filmId, this.props.match.params.type);
    }
  }

  render() {
    let movieListBar = <div className="search-filter__movies-amount">
                         <div>Films by {this.props.currentMovie.director}</div>
                       </div>

    return (
      <div>
        <header>
        <MovieCardDescription currentMovie={ this.props.currentMovie } />
        </header>
        <main>
          <HeaderFilter>
            { this.props.currentMovie.director ? movieListBar : null }
          </HeaderFilter>
          <MoviesList movies={ this.props.relatedMovies } />
        </main>
        <Footer />
      </div>
    );
  }
}