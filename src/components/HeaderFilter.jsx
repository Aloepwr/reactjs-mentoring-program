import '../stylesheets/HeaderFilter';

const HeaderFilter = ({amount=9}) => (
  <div className="search-filter">
    <div className="search-filter__movies-amount">
      <div>{amount} movies found</div>
    </div>
    <div className="search-filter__movies-sort">
      <ul>
        <li>Sort by</li>
        <li><a href="#">release date</a></li>
        <li><a href="#">rating</a></li>
      </ul>
    </div>
  </div>
);

export default HeaderFilter;