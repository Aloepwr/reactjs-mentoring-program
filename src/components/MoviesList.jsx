import React from 'react';
import "../stylesheets/MovieCard.less";
import { MovieCard } from './MovieCard';


function getYear(dateString) {
  if(dateString) {
    let year = dateString.slice(0, 4);
    return year;
  }
}

const MoviesList = (props) => {
  const movies = props.movies.map((movie, index) => {
    return <MovieCard
      title = { movie.title }
      release_date = { getYear(movie.release_date) }
      poster = { `https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster}` }
      id = { movie.id }
      type = { movie.type }
      key = { index }
    />
  });

  const noMovies = <h1 className="no-content">No films found</h1>;

  return (
    <div className="movie-card__list">
      { movies.length >= 1 ? movies : noMovies }
    </div>
  )
};

export default MoviesList;