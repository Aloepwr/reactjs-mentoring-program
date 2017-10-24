import React from 'react'
import { connect } from 'react-redux';

import { setSortBy, SortBy } from '../actions/index';
import '../stylesheets/HeaderFilter';


const mapStateToProps = (state) => {
  return {
    isDateActive: state.sortBy === SortBy.SORT_BY_RELEASE_DATE,
    isRatingActive: state.sortBy === SortBy.SORT_BY_RATING
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDateClick: () => {
      dispatch(setSortBy(SortBy.SORT_BY_RELEASE_DATE));
    },
    onRatingClick: () => {
      dispatch(setSortBy(SortBy.SORT_BY_RATING));
    }
  }
};

let SortingContainer = (props) => {
  let sortByDate;
  let sortByRating;
  
  if (props.isDateActive) {
    sortByDate = <button type="button" className="linkActive">release date</button>;
  } else {
    sortByDate = <button type="button" onClick={ props.onDateClick }>release date</button>;
  }

  if (props.isRatingActive) {
    sortByRating = <button type="button" className="linkActive">rating</button>;
  } else {
    sortByRating = <button type="button" onClick={ props.onRatingClick }>rating</button>;
  }

  return (
    <div className="search-filter">
      <li><span>Sort by:</span></li>
      <li>{ sortByDate }</li>
      <li>{ sortByRating }</li>
    </div>
  )
};

SortingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingContainer);

export default SortingContainer;