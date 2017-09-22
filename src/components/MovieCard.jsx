let movieInfo = {
  img: "http://netflixroulette.net/api/posters/60031236.jpg",
  title: "Kill Bill: Vol. 1",
  genre: "Action & Adventure",
  year: "2003"
};

let moviesList = []; // movieInfo, movieInfo, movieInfo, movieInfo, movieInfo, movieInfo, movieInfo, movieInfo, movieInfo

function movieItem(props) {
  return (
    <li className="movie-card">
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

const MovieCard = () => {
  if (moviesList.length < 1) { 
    return ( <h1 className="no-content">No films found</h1> );
  } else {
    return (
      <ul className="movie-card__list">
        {moviesList.map(movieItem)}
      </ul>
    );
  }
};

export default MovieCard;