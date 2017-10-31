import { Link } from 'react-router-dom';
import "../stylesheets/MovieCard";

export function MovieCard(props) {
  const { poster, title, release_date, id, type } = props;

  return (
    <div className="movie-card">
      <div className="movie-card__layout">
        <div className="movie-card__image">
          <Link to={ `/${type}/${id}` }>
            <img src={ poster } />
          </Link>
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
};

// let movieInfo = {
//   img: "",
//   title: "Kill Bill: Vol. 1",
//   genre: "Action & Adventure",
//   year: "2003"
// };

// let moviesList = [movieInfo];

// function movieItem(props, index) {
//   return (
//     <li className="movie-card" key={index}>
//       <div className="movie-card__layout">
//         <div className="movie-card__image">
//           {/* <img src={props.img} /> */}
//         </div>
//         <div className="movie-card__description">
//           <div className="movie-card__description--title">
//             <h4>{props.title}</h4>
//             <p>{props.genre}</p>
//           </div>
//           <div className="movie-card__description--year">
//             <div>{props.year}</div>
//           </div>            
//         </div>
//       </div>
//     </li>
//   );
// }

// const MovieCard = (props) => {
//   if (props.match.params.searchQuery) {
//     if (moviesList.length >= 1) { 
//       return (
//         <ul className="movie-card__list" onClick={ () => props.history.push(`/film/${encodeURI(props.match.params.searchQuery)}`) }>
//           {moviesList.map(movieItem)}
//         </ul>
//       );
//     }
//   } else {
//     return ( <h1 className="no-content">No films found</h1> );
//   }
// };

// export default MovieCard;


