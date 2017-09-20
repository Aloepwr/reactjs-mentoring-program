export const Header = () => (
  <header>
    <div className="header">
      <span className="span-title">netflixroulette</span>
      <section className="header__search-field">
        <h2>Find your movie</h2>
        <input type="search" placeholder="Enter the movie name here"/>
      </section>
      <div className="header__search-sort">
        <ul>
          <li>Search by</li>
          <li><a href="#">Title</a></li>
          <li><a href="#">Director</a></li>
        </ul>
        <button>Search</button>
      </div>
    </div>
  </header>
);