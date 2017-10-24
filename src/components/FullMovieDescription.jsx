import React from 'react';
import { Link } from 'react-router-dom';

import { MoviesList } from './MoviesList';
import MovieCardDescription from './MovieCardDescription';
import Footer from './Footer';

import '../stylesheets/MovieCardDescription';
import '../stylesheets/Footer';
import '../stylesheets/styles';


export class FullMovieDescription extends React.Component {
  componentWillMount() {
    this.props.loadMovieInfo(this.props.match.params.filmId, this.props.match.params.type);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.filmId != this.props.match.params.filmId) {
      this.props.loadMovieInfo(nextProps.match.params.filmId, this.props.match.params.type);
    }
  }

  render() {
    let movieListBar = `Films by ${this.props.currentMovie.director}`;

    return (
      <div>
        <header>
          <div className="movie-description__head">
            <span className="span-title">netflixroulette</span>
            <Link to="/search" className="btn__back">Search</Link>
          </div>
          <MovieCardDescription currentMovie={ this.props.currentMovie } />
        </header>
        <main>
          <MoviesList movies={this.props.relatedMovies}>
            { this.props.currentMovie.director ? movieListBar : null }
          </MoviesList>
        </main>
        <Footer />
      </div>
    );
  }
}