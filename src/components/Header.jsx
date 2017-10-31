// import { withRouter } from "react-router";
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import "../stylesheets/Header";
import '../stylesheets/styles';


export function Header(props) {
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
        <form onSubmit = { props.handleSubmit(props.onSubmitSearch) }>
          <div className="header__search-field">
            <label>
              <Field type="search" component="input" name="searchText" />
            </label>
          </div>
          <div className="header__search-sort">
            <ul>
              <li><span>Search by</span></li>
              <li>{ searchByMovies }</li>
              <li>{ searchByTVShows }</li>
            </ul>
            <label>
              <input type="submit" value="search" className="btn__search"/>
            </label>
          </div>
        </form>
      </div>
    </header>
  )
};



// let searchQuery = "";

// const Header = withRouter( ({history}) => (
//   <header>
//     <div className="header">
//       <span className="span-title">netflixroulette</span>
//       <section className="header__search-field">
//         <h2>Find your movie</h2>
//         <input type="search" placeholder="Enter the movie name here" onChange={ (e) => searchQuery = e.target.value }/>
//       </section>
//       <div className="header__search-sort">
//         <ul>
//           <li>Search by</li>
//           <li><a href="#">Movies</a></li>
//           <li><a href="#">Tv-Shows</a></li>
//         </ul>
//         <button className="btn__search" onClick={ () => history.push(`/search/${encodeURI(searchQuery)}`) }>
//           Search
//         </button>
//       </div>
//     </div>
//   </header>
// ));

// export default Header;