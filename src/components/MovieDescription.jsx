// let movieInfo = {
//   "unit": 87,
//   "show_id": 60031236,
//   "show_title": "Kill Bill: Vol. 1",
//   "release_year": "2003",
//   "rating": "3.8",
//   "category": "Action & Adventure",
//   "show_cast": "Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah, David Carradine, Michael Madsen, Julie Dreyfus, Chiaki Kuriyama, Sonny Chiba, Gordon Liu",
//   "director": "Quentin Tarantino",
//   "summary": "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle. But she lives -- and plots her vengeance.",
//   "img": "http://netflixroulette.net/api/posters/60031236.jpg",
//   "mediatype": 0,
//   "runtime": "111 min"
// }


class MovieDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: {
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
      }
    };
  }

  render() {
    return(
      <div className="movie-description" id="movie-description--popup">
        <div className="movie-description__image">
          <img src={this.state.movieInfo.img} />
        </div>
        <div className="movie-description__details">
          <div className="movie-description__details--title">
            <h2>{this.state.movieInfo.show_title}</h2>
            <p>{this.state.movieInfo.rating}</p>
          </div>
          <p>Oscar-winning Movies</p>
          <div className="movie-description__info">
            <p>{this.state.movieInfo.release_year}</p>
            <p>{this.state.movieInfo.runtime}</p>
          </div>
          <p className="movie-description__summary">{this.state.movieInfo.summary}</p>
          <div className="movie-description__people">
            <p>Director: {this.state.movieInfo.director}</p>
            <p>Cast: {this.state.movieInfo.show_cast}</p>
          </div>
        </div>
      </div>
    )
  }
};

export default MovieDescription;