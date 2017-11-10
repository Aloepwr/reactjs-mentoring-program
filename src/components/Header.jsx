import React from 'react';
import { withRouter } from 'react-router';

import "../stylesheets/Header.less";
import "../stylesheets/styles.less";


export const Header = withRouter( (props) => {
  let searchByMovies;
  let searchByTVShows;
  
  if (props.isMoviesActive) {
    searchByMovies = <button type="button" className="btn btn-active">Movies</button>
  } else {
    searchByMovies = <button
      type = "button"
      onClick = { props.onMoviesClick }
      className="btn">Movies</button>
  }
  
  if (props.isTVShowActive) {
    searchByTVShows = <button type="button" className="btn btn-active">TV Shows</button>
  } else {
    searchByTVShows = <button type="button"
      onClick = { props.onTVShowsClick }
      className="btn">TV Shows</button>
  }

  return (
    <header>
      <div className="header">
        <span className="span-title">netflixroulette</span>
        <h2 className="header-title">Find your movie</h2>
        <form onSubmit = { (e) => { e.preventDefault(); props.history.push(`/search/${e.target.searchText.value}`) }}>
          <div className="header__search-field">
            <label>
              <input type="search" name="searchText" placeholder="What would you like to watch?" />
            </label>
          </div>
          <div className="header__search-sort">
            <ul>
              <li><span>Search by</span></li>
              <li>{ searchByMovies }</li>
              <li>{ searchByTVShows }</li>
            </ul>
            <label>
              <input type="submit" value="search" className="btn__search" />
            </label>
          </div>
        </form>
      </div>
    </header>
  )
});
