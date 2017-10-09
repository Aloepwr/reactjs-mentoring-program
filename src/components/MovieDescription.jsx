import "../stylesheets/MovieDescription";


let movieInfo = {
  "unit": 87,
  "show_id": 60031236,
  "show_title": "Kill Bill: Vol. 1",
  "release_year": "2003",
  "rating": "3.8",
  "category": "Action & Adventure",
  "show_cast": "Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah, David Carradine, Michael Madsen, Julie Dreyfus, Chiaki Kuriyama, Sonny Chiba, Gordon Liu",
  "director": "Quentin Tarantino",
  "summary": "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle. But she lives -- and plots her vengeance.",
  "img": "http://netflixroulette.net/api/posters/60031236.jpg",
  "mediatype": 0,
  "runtime": "111 min"
};

const MovieDescription = (props) => (
  <div className="movie-description">
    <div className="movie-description__head">
      <span className="span-title">netflixroulette</span>
      <button className="btn__back" onClick={ () => props.history.goBack() }>
        Search
      </button>
    </div>
    
    <div className="movie-description__layout">
      <div className="movie-description__image">
        <img src={movieInfo.img} />
      </div>
      <div className="movie-description__details">
        <div className="movie-description__details--title">
          <h2>{movieInfo.show_title}</h2>
          <p>{movieInfo.rating}</p>
        </div>
        <p>{movieInfo.category}</p>
        <div className="movie-description__info">
          <p>{movieInfo.release_year}</p>
          <p>{movieInfo.runtime}</p>
        </div>
        <p className="movie-description__summary">{movieInfo.summary}</p>
        <div className="movie-description__people">
          <p>Director: {movieInfo.director}</p>
          <p>Cast: {movieInfo.show_cast}</p>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDescription;