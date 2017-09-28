import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


let searchQuery = "";

const Header = withRouter( ({history}) => (
  <header>
    <div className="header">
      <span className="span-title">netflixroulette</span>
      <section className="header__search-field">
        <h2>Find your movie</h2>
        <input type="search" placeholder="Enter the movie name here" onChange={ (e) => searchQuery = e.target.value }/>
      </section>
      <div className="header__search-sort">
        <ul>
          <li>Search by</li>
          <li><a href="#">Title</a></li>
          <li><a href="#">Director</a></li>
        </ul>
        <button className="btn__search" onClick={ () => history.push(`/search/${encodeURI(searchQuery)}`) }>
          Search
        </button>
      </div>
    </div>
  </header>
));

export default Header;