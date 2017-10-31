import { connect } from 'react-redux';

import { setSortBy, SortBy } from '../actions/index';
import '../stylesheets/HeaderFilter.less';


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
    sortByDate = <a className="link-active">release date</a>;
  } else {
    sortByDate = <a onClick={ props.onDateClick }>release date</a>;
  }

  if (props.isRatingActive) {
    sortByRating = <a className="link-active">rating</a>;
  } else {
    sortByRating = <a onClick={ props.onRatingClick }>rating</a>;
  }

  return (
    <div className="search-filter__movies-sort">
      <ul>
        <li><span>Sort by:</span></li>
        <li>{ sortByDate }</li>
        <li>{ sortByRating }</li>
      </ul>
    </div>
  )
};

SortingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingContainer);

export default SortingContainer;