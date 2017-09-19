let movieInfo = {
  img: "http://netflixroulette.net/api/posters/60031236.jpg",
  title: "Kill Bill: Vol. 1",
  genre: "Action & Adventure",
  year: "2003",
  key: Math.random()
};

let moviesList = [movieInfo, movieInfo, movieInfo, movieInfo, movieInfo, movieInfo, movieInfo, movieInfo, movieInfo];

function movieItem(props) {
  return (
    <li className="movie-card">
      <div className="movie-card_layout">
        <div className="movie-card_image">
          <img src={props.img}/>
        </div>
        <div className="movie-card_description">
          <div className="movie-card_description_title">
            <h4>{props.title}</h4>
            <p>{props.genre}</p>
          </div>
          <div className="movie-card_description_year">
            <div>{props.year}</div>
          </div>            
        </div>
      </div>
    </li>
  )
}

export const MovieCard = () => (
  <ul className="movie-card_list">
    {moviesList.map(movieItem)}
  </ul>
);