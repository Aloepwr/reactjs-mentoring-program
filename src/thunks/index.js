import { apiKey, SearchBy, receiveMovies, receiveRelatedMovies, receiveCurrentMovie } from '../actions/index';
import fetch from 'isomorphic-fetch';


// Functionality

function isResponseOk(res) {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res.json();
}

function convertToMovie(movie) {
  return {
    poster: movie.poster_path,
    title: movie.title,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    runtime: movie.runtime,
    overview: movie.overview,
    budget: movie.budget,
    director: movie.director ? movie.director : null,
    id: movie.id,
    type: "movie"
  }
}

function convertToTVShow(movie) {
  return {
    poster: movie.poster_path,
    title: movie.name,
    release_date: movie.first_air_date,
    vote_average: movie.vote_average,
    runtime: movie.episode_run_time ? movie.episode_run_time[0] : null,
    overview: movie.overview,
    seasons: movie.number_of_seasons,
    last_air_date: movie.last_air_date,
    id: movie.id,
    type: "tv"
  }
}

function withPoster(movie) {
  return movie.poster;
}

function isDirector(person) {
  return person.job === "Director";
}

// Fetches

export function fetchMovies(query) {
  return function (dispatch, getState) {
    let state = getState();

    let urlType = "";

    if (state.searchBy === SearchBy.SEARCH_BY_MOVIES) {
      urlType = "movie"
    } else {
      urlType = "tv"
    }

    return fetch(`https://api.themoviedb.org/3/search/${urlType}?api_key=${apiKey}&query=${query}`)
      .then(isResponseOk)
      .then(fetchedMovies => {
        let converter = state.searchBy === SearchBy.SEARCH_BY_MOVIES ? convertToMovie : convertToTVShow;
        let movies = fetchedMovies.results
                     .map(converter)
                     .filter(withPoster);
        dispatch(receiveMovies(movies));
      })
      .catch(error => console.error("An error occurred: ", error));
  }
}

export function fetchTVShowInfo(id, type) {
  let currentMovie = {};
  return function (dispatch) {

    return fetch(`http://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`)
      .then(isResponseOk)
      .then(movie => {
        currentMovie = convertToTVShow(movie);
        dispatch(receiveCurrentMovie(currentMovie));
        return fetch(`https://api.themoviedb.org/3/tv/${currentMovie.id}/recommendations?api_key=${apiKey}`)
      })
      .then(isResponseOk)
      .then(movies => {
        let relatedMovies = movies.results
            .map(convertToTVShow)
            .filter(withPoster);

        dispatch(receiveRelatedMovies(relatedMovies));
      })
      .catch(error => console.error("An error occurred: ", error));
  }
}

export function fetchMovieInfo(id, type) {
  let currentMovie = {};
  return function (dispatch) {

    return fetch(`http://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`)
      .then(isResponseOk)
      .then(movie => {
        currentMovie = convertToMovie(movie);
        return fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}`)
      })
      .then(isResponseOk)
      .then(movie => {
        let director = movie.crew.find(isDirector);
        if (director) {
          currentMovie.director = director.name;
          dispatch(receiveCurrentMovie(currentMovie));
          return fetch(`https://api.themoviedb.org/3/person/${director.id}/credits?api_key=${apiKey}`)
            .then(isResponseOk)
            .then(movies => {
              let directorMovies = movies.crew.filter(isDirector).filter(function(movie) {
                return movie.title != currentMovie.title;
              });
              let relatedMovies = directorMovies
                  .map(convertToMovie)
                  .filter(withPoster);
              dispatch(receiveRelatedMovies(relatedMovies));
            })
        } else {
          dispatch(receiveCurrentMovie(currentMovie));
          return fetch(`https://api.themoviedb.org/3/movie/${currentMovie.id}/recommendations?api_key=${apiKey}`)
                      .then(isResponseOk)
                      .then(movies => {
                        let relatedMovies = movies.results
                            .map(convertToMovie)
                            .filter(withPoster);
                        dispatch(receiveRelatedMovies(relatedMovies));
                      })
        }
      })
      .catch(error => console.error("An error occurred: ", error));
  }
}
