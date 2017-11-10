import React from 'react';
import { withRouter } from 'react-router';

import "../stylesheets/MovieCard.less";


export const MovieCard = withRouter( (props) => {
  const { poster, title, release_date, id, type } = props;

  return (
    <div className="movie-card">
      <div className="movie-card__layout">
        <div className="movie-card__image">
          <img src={ poster } onClick={ () => props.history.push(`/${type}/${id}`) }/>
        </div>
        <div className="movie-card__description">
          <div className="movie-card__description--title">
            <h4>{ title }</h4>
          </div>
          <div className="movie-card__description--year">
            <div>{ release_date }</div>
          </div>            
        </div>
      </div>
    </div>
  )
});
