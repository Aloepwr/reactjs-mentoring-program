import React from 'react';
import "../stylesheets/HeaderFilter.less";


const HeaderFilter = (props) => (
  <div className="search-filter">
    { props.children }
  </div>
);

export default HeaderFilter;