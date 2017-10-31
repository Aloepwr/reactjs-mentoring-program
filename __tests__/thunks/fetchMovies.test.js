import { fetchMovies } from "../../src/thunks/index";

describe("Fetch movies", () => {
  global.URLSearchParams = function URLSearchParams() { this.append = jest.fn() };

  function mockFetchWith(data) {
    global.fetch = () => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data)
      })
    };
  }


  it("Fetches required movies", async () => {
    const getState = jest.fn(() => { return {searchBy: "SEARCH_BY_MOVIES"} });
    const dispatch = jest.fn();

    const fetchedMovies = {
      results: [{
        poster_path: "/qmj5xPi1n1fAn5jU4qcAYTaviC1.jpg",
        title: "Title 1",
        release_date: "2015-05-06",
        vote_average: 5,
        runtime: 100,
        overview: "Overview 1",
        budget: 100000,
        director: "Quentin Tarantino",
        id: 1,
        type: "movie"
      }, {
        title: "Title 2",
        release_date: "2013-11-03",
        vote_average: 7.5,
        runtime: 120,
        overview: "Overview 2",
        budget: 225800,
        id: 2,
        type: "movie"
      }]
    };

    const filteredFetchedMovies = {
      results: [{
        poster: "/qmj5xPi1n1fAn5jU4qcAYTaviC1.jpg",
        title: "Title 1",
        release_date: "2015-05-06",
        vote_average: 5,
        runtime: 100,
        overview: "Overview 1",
        budget: 100000,
        director: "Quentin Tarantino",
        id: 1,
        type: "movie"
      }]
    };

    mockFetchWith(fetchedMovies);

    await fetchMovies("hello")(dispatch, getState);

    expect(dispatch.mock.calls[0][0].movies).toEqual(filteredFetchedMovies.results);
  });
});