import '../stylesheets/MovieCard';


let movieInfo = {
  img: "http://netflixroulette.net/api/posters/60031236.jpg",
  title: "Kill Bill: Vol. 1",
  genre: "Action & Adventure",
  year: "2003"
};

let moviesList = [movieInfo];

function movieItem(props, index) {
  return (
    <li className="movie-card" key={index}>
      <div className="movie-card__layout">
        <div className="movie-card__image">
          <img src={props.img} />
        </div>
        <div className="movie-card__description">
          <div className="movie-card__description--title">
            <h4>{props.title}</h4>
            <p>{props.genre}</p>
          </div>
          <div className="movie-card__description--year">
            <div>{props.year}</div>
          </div>            
        </div>
      </div>
    </li>
  )
}

const MovieCard = (props) => {
  if (props.match.params.searchQuery) {
    if (moviesList.length >= 1) { 
      return (
        <ul className="movie-card__list" onClick={ () => props.history.push(`/film/${encodeURI(props.match.params.searchQuery)}`) }>
          {moviesList.map(movieItem)}
        </ul>
      );
    }
  } else {
    return ( <h1 className="no-content">No films found</h1> );
  }
};

export default MovieCard;