import React from 'react';
import { withRouter } from 'react-router';

import "../stylesheets/MovieCardDescription.less";


const MovieCardDescription = withRouter( (props) => {
  const { poster, title, vote_average, release_date, runtime, overview, budget, seasons, last_air_date } = props.currentMovie;
  
  const rating = <p>{ vote_average }</p>;

  return (
    <div className="movie-description">
      <div className="movie-description__head">
        <span className="span-title">netflixroulette</span>
        <button className="btn__back" onClick={ () => props.history.goBack() }>Search</button>
      </div>
      
      <div className="movie-description__layout">
        <div className="movie-description__image">
          { poster ? <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster}`} /> : null }
        </div>
        <div className="movie-description__details">
          <div className="movie-description__details--title">
            <h2>{ title }</h2>
            { vote_average ? rating : null }
          </div>
          <div className="movie-description__info">
            { release_date ? <p>{release_date}</p> : null }
            { runtime ? <p>{runtime} min</p> : null }
          </div>
          <p className="movie-description__summary">{overview}</p>
          <div className="movie-description__bottom-info">
            { budget ? <p>Budget is {budget}$</p> : null }
            { seasons ? <p>Seasons: {seasons}</p> : null }
            { last_air_date ? <p>Last air date: {last_air_date}</p> : null }
          </div>
        </div>
      </div>
    </div>
  );
});

export default MovieCardDescription;
