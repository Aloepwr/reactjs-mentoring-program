import { mapStateToProps } from "../../src/containers/MoviesListResultContainer";

describe("List result container", () => {
  it("sort movies by date", () => {
    const stateForSortingByDate = {
      movies: [{
        release_date: "2017-09-30",
        vote_average: 8.8
      },
      {
        release_date: "1906-08-24",
        vote_average: 7.5
      },
      {
        release_date: "1988-10-10",
        vote_average: 9.0
      }],
      sortBy: "SORT_BY_RELEASE_DATE"
    };

    const sortedMovies = {
      movies: [{
        release_date: "1906-08-24",
        vote_average: 7.5
      },
      {
        release_date: "1988-10-10",
        vote_average: 9.0
      },
       {
        release_date: "2017-09-30",
        vote_average: 8.8
      }]
    };

    expect(mapStateToProps(stateForSortingByDate)).toEqual(sortedMovies)
  });

  it("sort movies by rating", () => {
    const stateforSortingByRating = {
      movies: [{
        release_date: "2017-09-30",
        vote_average: 8.8
      },
      {
        release_date: "1906-08-24",
        vote_average: 7.5
      },
      {
        release_date: "1988-10-10",
        vote_average: 9.0
      }],
      sortBy: "SORT_BY_RATING"
    };

    const sortedMovies = {
      movies: [{
        release_date: "1988-10-10",
        vote_average: 9.0
      },
      {
        release_date: "2017-09-30",
        vote_average: 8.8
      },
      {
        release_date: "1906-08-24",
        vote_average: 7.5
      }]
    };
    
    expect(mapStateToProps(stateforSortingByRating)).toEqual(sortedMovies)
  });
});